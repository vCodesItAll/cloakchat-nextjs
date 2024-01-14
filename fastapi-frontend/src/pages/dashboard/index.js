import Link from "next/link";
import DataService from "@/services/data.service";
import { useEffect } from "react";
import { useGlobalState } from "@/context/GlobalState";
import DataService from "@/services/data.service";

export default function DashboardPage() {
  const [localState, setLocalState] =  useState({});
  const [globalState, dispatchEvent] = useGlobalState();

  // useEffect( async () => {
  //   // Get Data and set State
  //   DataService
  //     .getData({
  //       data: "hello",
  //       headers: {
  //         "Content-Type": "application/x-www-form-urlencoded",
  //         "Authorization":"Bearer " + globalState.user.user_id
  //       }
  //     })
  //     .then(async (resp) => {
  //         if(resp != undefined){
  //             setLocalState(resp)
  //             await dispatchEvent({
  //               type: 'GET_DATA',
  //               payload: resp,
  //             });
  //         }
  //     })
  //     .catch((error) => {
  //         // Handle the error here
  //         console.error('An error occurred:', error);
  //     })
  //     .finally(() => {
  //         // Code to run regardless of success or failure
  //         console.log('Get Data request completed');
  //     });

  //     DataService
  //     .sendData({
  //       data: "something",
  //       headers: {
  //         "Content-Type": "application/x-www-form-urlencoded",
  //         "Authorization":"Bearer " + globalState.user.user_id
  //       }
  //     })
  //     .then(async (resp) => {
  //         if(resp != undefined){
  //             setLocalState(resp)
  //             await dispatchEvent({
  //               type: 'SET_DATA_COMPLETED',
  //               payload: resp,
  //             });
  //         }
  //     })
  //     .catch((error) => {
  //         // Handle the error here
  //         console.error('An error occurred:', error);
  //     })
  //     .finally(() => {
  //         // Code to run regardless of success or failure
  //         console.log('Set Data request completed');
  //     });
  // }, [])

  return <div>
    <h1>Dashboard</h1>
    {/* {
      localState
    } */}
    
  </div>
}