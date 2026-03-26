import SalesChart from './Component/Chart/Reachart'
import { salesData } from './Backend';

const App = () => {
  return (
    <div>
      <div style={{ padding: 20 }}>
      <h2>CRM Dashboard</h2>
      <SalesChart data={salesData} />
    </div>
    </div>
  )
}

export default App