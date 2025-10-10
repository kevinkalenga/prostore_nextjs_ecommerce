
// 'use client'

// import { useState } from 'react'
// import { Button } from '@/components/ui/button'
// import { Input } from '@/components/ui/input'
// import { Label } from '@/components/ui/label'
// import { signInDefaultValues } from '@/lib/constants'
// import Link from 'next/link'
// import { useRouter, useSearchParams } from 'next/navigation'
// import { signIn } from 'next-auth/react'

// // ✅ Hook client pour gérer l'état de l'action
// function useActionState(actionFn: (formData: FormData) => Promise<any>, initialState: any) {
//   const [state, setState] = useState(initialState)

//   const wrappedAction = async (formData: FormData) => {
//     const result = await actionFn(formData)
//     setState(result)
//   }

//   return [state, wrappedAction] as const
// }

// // ✅ Action client pour se connecter avec les credentials
// async function signInWithCredentialsClient(_: unknown, formData: FormData) {
//   const email = formData.get('email') as string
//   const password = formData.get('password') as string
//   const callbackUrl = formData.get('callbackUrl') as string

//   const result = await signIn('credentials', {
//     redirect: false,
//     email,
//     password,
//     callbackUrl,
//   })

//   if (result?.error) {
//     return { success: false, message: 'Invalid email or password' }
//   }

//   return { success: true, message: 'Signed in successfully', callbackUrl }
// }

// const CredentialsSignInForm = () => {
//   const router = useRouter()
//   const searchParams = useSearchParams()
//   const callbackUrl = searchParams.get('callbackUrl') || '/'

//   const [data, action] = useActionState(signInWithCredentialsClient, {
//     success: false,
//     message: '',
//   })

//   // Redirection immédiate si login réussi
//   if (data.success && data.callbackUrl) {
//     router.push(data.callbackUrl)
//   }

//   return (
//     <form
//       action={action}
//       className="space-y-6"
//     >
//       <input type="hidden" name="callbackUrl" value={callbackUrl} />

//       <div>
//         <Label htmlFor="email">Email</Label>
//         <Input
//           id="email"
//           name="email"
//           type="email"
//           required
//           autoComplete="email"
//           defaultValue={signInDefaultValues.email}
//         />
//       </div>

//       <div>
//         <Label htmlFor="password">Password</Label>
//         <Input
//           id="password"
//           name="password"
//           type="password"
//           required
//           autoComplete="password"
//           defaultValue={signInDefaultValues.password}
//         />
//       </div>

//       <Button type="submit" className="w-full">
//         Sign In
//       </Button>

//       {data && !data.success && (
//         <div className="text-center text-destructive">{data.message}</div>
//       )}

//       <div className="text-sm text-center text-muted-foreground">
//         Don&apos;t have an account?{' '}
//         <Link href="/sign-up" className="link">
//           Sign Up
//         </Link>
//       </div>
//     </form>
//   )
// }

// export default CredentialsSignInForm 



'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { signInDefaultValues } from '@/lib/constants'
import Link from 'next/link'
import { useRouter, useSearchParams } from 'next/navigation'
import { signIn } from 'next-auth/react'

const CredentialsSignInForm = () => {
  const router = useRouter()
  const searchParams = useSearchParams()
  const callbackUrl = searchParams.get('callbackUrl') || '/'
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setLoading(true)
    setError('')

    const formData = new FormData(e.currentTarget)
    const email = formData.get('email') as string
    const password = formData.get('password') as string

    const result = await signIn('credentials', {
      redirect: false,
      email,
      password,
      callbackUrl,
    })

    if (result?.error) {
      setError('Invalid email or password')
      setLoading(false)
      return
    }

    router.push(callbackUrl)
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <Label htmlFor="email">Email</Label>
        <Input
          id="email"
          name="email"
          type="email"
          required
          autoComplete="email"
          defaultValue={signInDefaultValues.email}
        />
      </div>

      <div>
        <Label htmlFor="password">Password</Label>
        <Input
          id="password"
          name="password"
          type="password"
          required
          autoComplete="password"
          defaultValue={signInDefaultValues.password}
        />
      </div>

      <Button type="submit" className="w-full" disabled={loading}>
        {loading ? 'Signing In...' : 'Sign In'}
      </Button>

      {error && <div className="text-center text-destructive">{error}</div>}

      <div className="text-sm text-center text-muted-foreground">
        Don&apos;t have an account?{' '}
        <Link href="/sign-up" className="link">
          Sign Up
        </Link>
      </div>
    </form>
  )
}

export default CredentialsSignInForm

