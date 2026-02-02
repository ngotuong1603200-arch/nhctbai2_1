import './App.css'
import Student from './Components/Students';
function App() {
  return (
    <div className="container">
        <h2 class = "text">Danh Sách Sinh Viên </h2>
      <div className="student-box">
        <Student name="Lý Tấn Phát" age="17" class="26.SP.IT3" favorite="Đọc Manga anime" />
      </div>

      <div className="student-box">
        <Student name="Trịnh Thái Nguyên" age="18" class="26.SP.IT3" favorite="Nghe Nhạc" />
      </div>

      <div className="student-box">
        <Student name="Nguyễn Hoàng Cát Tường" age="17" class="26.SP.IT3" favorite="Nghe Nhạc Ngủ" />
      </div>

      <div className="student-box">
        <Student name="Nguyễn Thanh Nhật" age="17" class="26.SP.IT3" favorite="Nấu ăn, chơi game" />
      </div>

      <div className="student-box">
        <Student name="Ngô Minh Tân" age="17" class="26.SP.IT3" favorite="Nghe Nhạc" />
      </div>
      
      <div className="student-box">
        <Student name="Thái Phạm Hương Giang" age="17" class="26.SP.IT3" favorite="Săn xu shoppe" />
      </div>

    </div>
  )
}

export default App;