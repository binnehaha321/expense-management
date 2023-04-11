import { Timeline } from "antd"
import LinkSpreadsheet from "./partials/LinkSpreadsheet"


const Tutorial = () => {
  return (
    <div style={{ marginTop: "1rem", paddingInline: "1rem" }}>
      <Timeline
        items={[
          {
            children: <LinkSpreadsheet />,
          },
          {
            children: 'Tạo một sheet mới.',
          },
          {
            children: `Tạo dữ liệu tại bảng chi tiêu`,
          },
          {
            children: 'Upload chi tiêu lên sheet đã tạo',
          },
        ]}
      />
    </div>
  )
}

export default Tutorial