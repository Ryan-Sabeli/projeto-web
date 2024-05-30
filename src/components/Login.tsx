'use client'
import React from 'react'
import Button from '@/components/forms/SubmitButton'
import loginAction from '@/lib/actions/login'
import { error } from 'console'
import { access } from 'fs'
import { useFormState } from 'react-dom'
import ErrorMessage from './helper/error-message'
import Input from './forms/Input'

export default function LoginForm() {

  const [state, action] = useFormState(loginAction, {
    ok: false,
    error: '',
    data: null,
  });

  React.useEffect(() => {
    if (state.ok) window.location.href = '/';
  }, [state.ok]);


    return (

        <div className="p-8 w-96">
          <form action={action}>
            <Input label="E-mail" name="username" type="text" />
            <Input label="Senha" name="password" type="password" />
            <ErrorMessage error={state.error} />
            <Button />
          </form>
          
        </div>

    )
}