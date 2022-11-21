import './subTitle.css'


export const Subtitle = () => {
  
  let chosenSubtitle = 0
  
  // function ChosenSubtitle () {
  //   if(chosenSubtitle === 0){
  //     console.log( chosenSubtitle)
  //     return chosenSubtitle = 1
  //   } else {
  //     console.log(chosenSubtitle)
  //     return chosenSubtitle = 0
  //   }
  // }
  const subTitleOne = <h2 className="subTitle text-5xl font-bold">Analógico</h2>
  const subTitleTwo = <h2 className="subTitle text-5xl font-bold">Teste</h2>
  
  return (
    <>
      {chosenSubtitle === 0 ? subTitleOne : subTitleTwo}
      {/* <button className="" 
      onClick={ () => { ChosenSubtitle()} }
      >
        mudar subtitulo
      </button> */}
    </>
  );
}