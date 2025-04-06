import { Artifact } from '@/components'
import { NotificationHistory } from '@/features/NoficiationHistory'

const App = () => {
  return (
    <Artifact>
      <Artifact className="border-[rgba(0,0,0,0.03)]">
        <Artifact className="border-[rgba(0,0,0,0.04)]">
          <NotificationHistory />
        </Artifact>
      </Artifact>
    </Artifact>
  )
}

export default App
