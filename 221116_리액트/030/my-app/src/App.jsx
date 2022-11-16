function One(){
  return 
      <a href="#">LEARN MORE</a>
}


const Card = (props)=>{
  return(
  <section>
    <img src="https://picsum.photos/200/300​" alt="" />
    <h2>{props.value}</h2>
    <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore
        reprehenderit ipsam quas, temporibus eius est, porro ex repudiandae sed
        illum voluptatem, nemo dolorem corporis iusto sapiente facere! Illo,
        quae. Consequatur.
      </p>
      <a href="#">SHARE</a>
      <a href="#">{props.children}</a>
  </section> 
  )
}

function App() {
  return (
    <>
      <Card value="One">
        <One />
      </Card>
      <Card value="Two" />
      <Card value="Three" />
    </>
  );
}
export default App;