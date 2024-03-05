import { auth } from '@/libs/auth'
import Container from '@/components/Container'
import Form from './Form'
import List from './List'
import { GithubSignInButton } from './Buttons'

const Guestbook: React.FC = async () => {
  const session = await auth()
  const isAuthed = session && session.user
  return (
    <Container className="flex flex-col space-y-6 max-w-screen-md">
      {isAuthed ? (
        <Form />
      ) : (
        <div>
          <GithubSignInButton />
        </div>
      )}
      <List />
    </Container>
  )
}

export default Guestbook
