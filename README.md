# Initial Set up
```
	npx create-react-app
	npm install @mui/material @emotion/react @emotion/styled
	npm install @material-ui/core
	npm install @materail-ui/icons
	npm install react-router-dom
	npm i react-dom react-redux redux redux-devtools-extension redux-thunk axios
```
	


#		Routing
```
import { BrowserRouter as Router, Route } from "react-router-dom";
import Welcome from './screen/Welcome'

export default function App(){
return(
	<Router>
		<Header/>
		<Route path='/'  component={Welcome} exact><Route>
	<Router>
	)
}
```

* Here header is not routed using Route, therefore it will not have props of 
 ```history,location and match```
* to get those props in Header we ned to import withRouter  from react-router-dom and then export Header with HOC - 
```
export default withRouter(Header)
```
#	useLocation
```
	import {useLocation} from 'react-router-dom'
	const location = useLocation()
	
	{location.pathname==='/' && <Home/>}
```	
	
#	Link
```
	import {Link } from 'react-router-dom'
	<Link to '/about' > About</Link>
	//This will not reload the page, instead just change the component
	
	
```
	

	
#	Redux

```
	npm install react-redux
	npm install redux-thunk
	npm install redux-devtools-extension --save
	
	-------------------------------------------------
	import { Provider } from 'react-redux'
	import store from './store'

	const rootElement = document.getElementById('root')
	ReactDOM.render(
		<Provider store={store}>
			<App />
		</Provider>,
		rootElement
	)

	-----------------------------------------------------
		import {createStore, 
			combineReducers} from 'redux'
		
		import {applyMiddleware} from 'redux'
		
		import thunk from 'redux-thunk'
		import { composeWithDevTools } from "redux-devtools-extension";
		
		
		const initialState={
		
		}
		
		const reducer = combineReducers({first:firstReducer});
		const middleware =[thunk]
		
		const store= createStore(
			reducer,
			initialState,
			composeWithDevTools(applyMiddleware(...middleware))
		)
		
		export default store
	
	```
	
	



		
	
	
# PropTypes and defaultProps
```
	import PropTypes from 'prop-types'
	const Header=({title})=>{
	return<>something {title}</>}
	
	Header.defaultProps={
	title: 'some text'
	}
	
	Header.propTypes={
	title:Proptypes.String.isRequired
	}
	
	
```
	
#	Inline Styling
```
	<h1 style={{color:'red',backgroundColor:'black'}}>Something</h1>
	OR
	Heading ={color:'red',backgroundColor:'black'}
	<h1 style={Heading}>Something</h1>
```	
# importing css file and using it as dynamic style

Create CSS file with name ``somethinh.module.css``

import it is js file with a name (classes)
Now one can use the style dynamically as below
```
import classes from './something.module.css'
<div className={classes.header}>

```
# Basic with material ui
```
	import react from 'react'
	import {makeStyle} from '@material-ui/core'
	
	const useStyles = makeStyle((theme)=>({
	
		[theme.breakpoints.down('sm')]:{
               marginLeft:'1px',
               marginRight:'1px', 
            },
		})
	)
	
	
	export default function name(){
	const classes = useStyle()
	return()
	}
	
```

# Material UI

```
import {makeStyles} from '@material-ui/core'

const useStyle= makeStyles((theme)=>({
    
    header:{
        display:'flex',
        width:'100%',
        background:'teal',
        '& h4':{
            margin:'0px',
            color:'white'
        },
        [theme.breakpoints.down('md')]:{
            background:'red',
        }
    },

    

})
)

export default function Header(){
    const style=useStyle()
    return(
        <div className={style.header}>
            <h4>Note Taking App</h4>
        </div>
    )
}
	
```


	
	
	