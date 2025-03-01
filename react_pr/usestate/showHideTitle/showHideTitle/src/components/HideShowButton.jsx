import react, { useState } from "react";
export default function HideShowButton({ title }) {
  const [isHidden, setHideState] = useState(false);
  return (
    <>
      {console.log("object :>> ", setHideState)}
      <button title={title} onClick={() => setHideState(isHidden => !isHidden)}>
        {console.log(isHidden)}
        {title ? title : "Hide"}
      </button>
      {!isHidden && (
        <h1>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora non
          repellendus laboriosam qui ad, consequuntur nobis recusandae vel,
          dolores unde vero nihil eum cupiditate aspernatur incidunt ex adipisci
          fuga consequatur!
        </h1>
      )}
    </>
  );
}
