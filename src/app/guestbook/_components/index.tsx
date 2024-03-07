import { auth } from '@/libs/auth'
import Container from '@/components/Container'
import Form from './Form'
import List from './List'
import { GithubSignInButton } from './Buttons'

const Guestbook: React.FC = async () => {
  const session = await auth()
  const isAuthed = session && session.user
  return (
    <Container className="max-w-screen-md">
      {isAuthed ? (
        <Form />
      ) : (
        <div>
          <GithubSignInButton />
        </div>
      )}
      <div className="py-12">
        <List />
      </div>
    </Container>
  )
}

export default Guestbook
