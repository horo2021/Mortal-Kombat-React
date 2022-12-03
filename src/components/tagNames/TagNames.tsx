import React from 'react'
import TagName from '../tagName/TagName'
import styles from "./tagNames.module.css"
import jsonData from "../../data/characters.json";
const TagNames = (props:{setCharacterTags:any}) => {
 const tagsList:any=[]
 jsonData.forEach((item)=>{
  item?.tags?.forEach((tagItem:any)=>{
    tagsList.push(tagItem.tag_name)
  })
 })
 const tunedTagsList = [...new Set(tagsList)];

const selectedtagHandler =(name:any)=>{
props.setCharacterTags((prev:any)=>{
if(prev.includes(name)){
  return prev.filter((item:any)=>{
    return item!==name
  })
}else {
  return [...prev,name]
}
})
}
  return (
    <div className={styles["tag-names-cont"]}>
   {tunedTagsList.map((item:any)=>{
return  <TagName key={item} name={item} selectedtagHandler={selectedtagHandler}/>
   })}
   
  
    </div>
  )
}

export default TagNames