import Container from '@/components/Container'
import GuestList from './GuestList'
import GuestInput from './GuestInput'

const Guestbook = () => {
  return (
    <Container className="pt-12 pb-4 space-y-6">
      <GuestInput />
      <GuestList />
    </Container>
  )
}

export default Guestbook
