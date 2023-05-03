export const RegularList = ({items, resourceName, itemComponent: ItemComponent}) => {

   
    return(
        <>
            {items.map((item, index) => {
               return <>
                <h2>{index + 1}</h2>
              <ItemComponent key={index} {...{[resourceName]: item}}/>
              </>
            } )}
        </>
    )
}