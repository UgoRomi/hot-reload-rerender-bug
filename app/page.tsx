import { AsyncServerComponent } from '../components/AsyncServerComponent'
import { ClientComponent } from '../components/ClientComponent'

export default async function Home() {
  console.log('I am Home, and I am being rendered')
  const resolvedElement = await AsyncServerComponent()
  return (
    <div>
      Home
      <ClientComponent>{resolvedElement}</ClientComponent>
    </div>
  )
}
