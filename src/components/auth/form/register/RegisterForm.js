import React from 'react';
import { useFormik } from 'formik';
import { useDispatch } from 'react-redux';
import InputField from '../InputField';
import PrimaryButton from '../../../common/PrimaryButton';
import SecondaryButton from '../../../common/SecondaryButton';
import * as actions from '../../../../store/actions/index';
import * as Yup from 'yup';

const Register = ({ onClick }) => {
  const dispatch = useDispatch();
  const formik = useFormik({
    initialValues: {
      email: '',
      username: '',
      password: '',
      confirmPassword: '',
      birthDate: '',
    },
    onSubmit: () => {
      dispatch(actions.login());
    },
    validationSchema: Yup.object({
      email: Yup.string().email('Invalid email address').required('Required'),
      username: Yup.string().required('Required'),
      password: Yup.string()
        .required('Required')
        .min(6, 'Length must not less than 6'),
      confirmPassword: Yup.string()
        .required('Required')
        .oneOf([Yup.ref('password'), null], 'Passwords must match')
        .min(6, 'Length must not less than 6'),
      birthDate: Yup.string().required('Required'),
    }),
  });

  return (
    <form className='auth-form' onSubmit={formik.handleSubmit}>
      <h1 className='heading-text' style={{ marginBottom: '4rem' }}>
        Register
      </h1>
      <InputField
        title='email'
        name='email'
        onChange={formik.handleChange}
        value={formik.values.email}
      />
      {formik.errors.email ? <p>{formik.errors.email}</p> : null}
      <InputField
        title='username'
        name='username'
        onChange={formik.handleChange}
        value={formik.values.email}
      />
      {formik.errors.username ? <p>{formik.errors.username}</p> : null}
      <InputField
        title='password'
        name='password'
        onChange={formik.handleChange}
        value={formik.values.password}
      />
      {formik.errors.password ? <p>{formik.errors.password}</p> : null}
      <InputField
        title='confirm password'
        name='confirmPassword'
        onChange={formik.handleChange}
        value={formik.values.confirmPassword}
      />
      {formik.errors.confirmPassword ? (
        <p>{formik.errors.confirmPassword}</p>
      ) : null}
      <InputField
        title='birthdate'
        name='birthDate'
        onChange={formik.handleChange}
        value={formik.values.birthDate}
      />
      {formik.errors.birthDate ? <p>{formik.errors.birthDate}</p> : null}

      <div className='auth-button-group'>
        <SecondaryButton title={`Switch to Login`} onClick={onClick} />
        <PrimaryButton title={'Register'} submit />
      </div>
    </form>
  );
};
export default Register;
