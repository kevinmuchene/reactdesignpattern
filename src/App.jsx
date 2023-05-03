import { RegularList } from "./RegularList";
import { SmallPerson } from "./people/SmallPerson";
import { LargePerson } from "./people/LargePerson";
import LargeProduct from "./products/LargeProduct";
import { UserLoader } from "./UserLoader";
import UserInfo from "./UserInfo";
import { ResourceLoader } from "./ResourceLoader";
import ProductInfo from "./ProductInfo";
import { DataSource } from "./DataSource";
import axios from "axios";
import UncontrolledForm from "./UncontrolledForm";
import ControlledForm from "./ControlledForm";
import UncontrolledOnboardingFlow from "./UncontrolledOnboardingFlow";
import { printProps } from "./printProps";
import { withUser } from "./withUser";
import { UserInfoForm } from "./UserInfoForm";

const getServerData = url => async () => {
	const response = await axios.get(url);
	return response.data;
}

const people = [{
	name: 'John Doe',
	age: 54,
	hairColor: 'brown',
	hobbies: ['swimming', 'bicycling', 'video games'],
}, {
	name: 'Brenda Smith',
	age: 33,
	hairColor: 'black',
	hobbies: ['golf', 'mathematics'],
}, {
	name: 'Jane Garcia',
	age: 27,
	hairColor: 'blonde',
	hobbies: ['biology', 'medicine', 'gymnastics'],
}];

const products = [{
	name: 'Flat-Screen TV',
	price: '$300',
	description: 'Huge LCD screen, a great deal',
	rating: 4.5,
}, {
	name: 'Basketball',
	price: '$10',
	description: 'Just like the pros use',
	rating: 3.8,
}, {
	name: 'Running Shoes',
	price: '$120',
	description: 'State-of-the-art technology for optimum running',
	rating: 4.2,
}];

const FistStep = ({goToNext}) => {
	return (
		<>
			<h2>Step 1</h2>
			<button onClick={goToNext}>Next</button>
		</>
	)
}
const SecondStep = ({goToNext}) => {
	return (
		<>
			<h2>Step 2</h2>
			<button onClick={goToNext}>Next</button>
		</>
	)
}
const ThirdStep = ({goToNext}) => {
	return (
		<>
			<h2>Step 3</h2>
			<button onClick={goToNext}>Next</button>
		</>
	)
}

const UserPrintProps = printProps(UserInfo);
const GetUserInfo = withUser(UserInfo, 2);

function App() {
	return (
		<>
			{/* <UserLoader userId={"1"}>
				<UserInfo/>
			</UserLoader> */}
			{/* <ResourceLoader resourceUrl={"http://localhost:8080/users/2"} resourceName={"user"}>
				<UserInfo/>
			</ResourceLoader>
			<ResourceLoader resourceUrl={"http://localhost:8080/products/20"} resourceName={"product"}>
				<ProductInfo/>
			</ResourceLoader> */}
			{/* <DataSource getDataFunc={ getServerData("http://localhost:8080/users/1")} resourceName={"user"}>
				<UserInfo/>
				</DataSource> */}

			{/* <UserPrintProps a={2} b={{name: "Kevin"}} c= "Kinuthia"/> */}
			{/* <GetUserInfo/> */}
			<UserInfo userId="1"/>
			<UserInfo userId="2"/>
			<UserInfo userId="3"/>
				
		</>
	);
}

export default App;


/*import { RegularList } from "./RegularList";
import { LargePerson } from "./people/LargePerson";
import { SmallPerson } from "./people/SmallPerson";

const people = [{
	name: 'John Doe',
	age: 54,
	hairColor: 'brown',
	hobbies: ['swimming', 'bicycling', 'video games'],
}, {
	name: 'Brenda Smith',
	age: 33,
	hairColor: 'black',
	hobbies: ['golf', 'mathematics'],
}, {
	name: 'Jane Garcia',
	age: 27,
	hairColor: 'blonde',
	hobbies: ['biology', 'medicine', 'gymnastics'],
}];

const products = [{
	name: 'Flat-Screen TV',
	price: '$300',
	description: 'Huge LCD screen, a great deal',
	rating: 4.5,
}, {
	name: 'Basketball',
	price: '$10',
	description: 'Just like the pros use',
	rating: 3.8,
}, {
	name: 'Running Shoes',
	price: '$120',
	description: 'State-of-the-art technology for optimum running',
	rating: 4.2,
}];

function App() {
	return (
    <>
		<RegularList
    items={people}
    resourceName="person"
    itemComponent={SmallPerson}/>
    <RegularList
    items={people}
    resourceName="person"
    itemComponent={LargePerson}/>
    </>
	);
}

export default App; */



/*
import { SplitScreen } from './SplitScreen'

const LeftHandComponent = ({direction}) => {
  return <h1 style={{backgroundColor: 'green'}}>{direction}!</h1>
}

const RightHandComponent = ({direction}) => {
  return <h1 style={{backgroundColor: "red"}}>{direction}!</h1>
}

function App() {
 

  return (
    <SplitScreen
     
      leftWeight={1}
      rightWeight={3}
    >
      <LeftHandComponent direction={"Kushoto"}/>
      <RightHandComponent direction={"Kulia"}/>
    </SplitScreen>
  )
}

export default App
*/