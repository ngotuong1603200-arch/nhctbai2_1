function Student(props) {
  return (
    <>
    <h2>Tên: {props.name}</h2>
    <h2>Tuổi {props.age}</h2>
    <h2>Lớp: {props.class}</h2>
    <h2>Sở Thích: {props.favorite}</h2>
    </>
  );
}

export default Student;