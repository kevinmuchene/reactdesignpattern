export const RegularList = ({
  items,
  resourceName,
  itemComponent: ItemComponent,
}) => {
  return (
    <>
      {items.map((item, index) => {
        <>
          <h2>{index + 1}</h2>
          return <ItemComponent key={index} {...{ [resourceName]: item }} />
        </>;
      })}
    </>
  );
};
