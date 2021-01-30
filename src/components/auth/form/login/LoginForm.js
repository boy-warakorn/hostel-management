import React, { Fragment } from 'react';
import { useDispatch } from 'react-redux';
import { useFormik } from 'formik';
import InputField from '../InputField';
import PrimaryButton from '../../../common/PrimaryButton';
import SecondaryButton from '../../../common/SecondaryButton';
import * as actions from '../../../../store/actions/index';
import * as Yup from 'yup';

const LoginForm = ({ onClick }) => {
  const dispatch = useDispatch();

  const formik = useFormik({
    initialValues: {
      username: '',
      password: '',
    },
    onSubmit: () => {
      dispatch(actions.login());
    },
    validationSchema: Yup.object({
      username: Yup.string().required('Required'),
      password: Yup.string()
        .required('Required')
        .min(6, 'Length must not less than 6'),
    }),
  });

  return (
    <Fragment>
      <i
        className='fas fa-hotel icon-primary icon-l'
        style={{ marginBottom: '2rem' }}
      ></i>
      <h1 className='heading-text'>The HosteL</h1>
      <form className='auth-form' onSubmit={formik.handleSubmit}>
        <InputField
          title='username'
          name='username'
          onChange={formik.handleChange}
          value={formik.values.username}
        />
        {formik.errors.username ? <p>{formik.errors.username}</p> : null}
        <InputField
          title='Password'
          name='password'
          onChange={formik.handleChange}
          value={formik.values.password}
        />
        {formik.errors.password ? <p>{formik.errors.password}</p> : null}
        <div className='auth-button-group'>
          <SecondaryButton title={`Switch to Register`} onClick={onClick} />
          <PrimaryButton title={'Login'} submit />
        </div>
      </form>
    </Fragment>
  );
};

export default LoginForm;
