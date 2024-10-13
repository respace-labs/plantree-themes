import { PropsWithChildren } from 'react'

const TableWrapper = ({ children }: PropsWithChildren) => {
  return (
    <div className="w-full overflow-x-auto">
      <table>{children}</table>
    </div>
  )
}

export default TableWrapper
