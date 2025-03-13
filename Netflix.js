import netflix from "./api/netflix.json";

import { Card1 } from "./Card1";
export function Netflix() {
  return (
    <>
    <ul className="grid grid-three--cols">
      {netflix.map((curelem) => (
       
        <Card1 data={curelem} key={curelem.id}></Card1>
        //<Card data={curelem} key={curelem.id}></Card>
       
      )
    )
  }
      
     </ul> 
     </>
  );
 
}
export default Netflix;
