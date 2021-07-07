/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react/self-closing-comp */
/* eslint-disable no-trailing-spaces */
import React,{ useContext } from 'react';
import { StyleSheet, Text, View} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { Neomorph } from 'react-native-neomorph-shadows';
import { Button } from 'react-native-elements';
import { PermissionsContext } from '../context/PermissionsContext';



export const PermissionsScreen = () => {

    const {permissions,askLocationPermission} = useContext(PermissionsContext);


 

    return (

        <LinearGradient
        colors={['red','purple','orange','blue']} 
        style={{...StyleSheet.absoluteFillObject , justifyContent:'center',alignItems:'center'}} 
        start={{x:0.1,y:0.1}}
        end={{x:0.8, y:0.8}}
        >

        
    
    <View style={{alignItems:'center', paddingTop:0,alignContent:'center', justifyContent:'center'}}>
     
         

     <Neomorph
             inner={true} // <- enable shadow inside of neomorph
             swapShadows={true} // <- change zIndex of each shadow color
             style={{

                 shadowRadius: 20,
                 borderRadius: 50,
                 backgroundColor: 'white',
                 width: 300,
                 height: 60,
                 flexDirection:'row',
                 alignContent:'center',
                 alignItems:'center',
                 justifyContent:'center',

             }}
             >

         <Text style= {{
         fontSize:30,
         fontWeight:'bold',
         color:'black',
         textAlign:'center',
         alignContent:'center',
         
         }}
         >Permissions</Text>
            
     </Neomorph>

   
      

        <Neomorph
             inner={true} // <- enable shadow inside of neomorph
             swapShadows={true} // <- change zIndex of each shadow color
             style={{

                 shadowRadius: 5,
                 borderRadius: 50,
                 backgroundColor: 'white',
                 width: 300,
                 height: 200,
                 flexDirection:'row',
                 alignContent:'center',
                 alignItems:'center',
                 justifyContent:'center',
                 
             }}
             >

         <Text style= {{
         fontSize:30,
         fontWeight:'bold',
         color:'black',
         }}
         > {JSON.stringify(permissions,null,5)} </Text>
            
        </Neomorph>

        </View>

        <Button title="Permission"
        onPress={askLocationPermission}
         />


       
    </LinearGradient>

       
    )
}
