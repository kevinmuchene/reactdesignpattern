export const SmallPerson = ({item}) =>
{
    console.log(item)
    const {name, age} = item;

    return(
        <p>Name: {name}, Age: {age} years</p>
    );
}
