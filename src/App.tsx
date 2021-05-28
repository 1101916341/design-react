import React from 'react'
import Button, { ButtonSize, ButtonType } from './components/Button/button'

const App: React.FC = () => {
  return (
    <div className='App'>
      <Button>Hello</Button>
      <Button disabled>Hello</Button>
      <Button disabled btnType={ButtonType.Primary} size={ButtonSize.Smail}>
        Hello
      </Button>
      <Button btnType={ButtonType.Danger} size={ButtonSize.Large}>
        Hello
      </Button>
      <Button btnType={ButtonType.Link} disabled href='https://www.baidu.com'>
        链接
      </Button>
    </div>
  )
}

export default App
