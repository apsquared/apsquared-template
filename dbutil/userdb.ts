
import clientPromise from "@/dbutil/mymongodb"
import {UserDetails}  from '@/types/userdetails'
import * as DB from '@/dbutil/dbmain'

export const USER_DETAILS_COLL:string = 'userdetails';



export async function createUserDetails(details: UserDetails):Promise<boolean> {
    console.log("createUserDetails called");
    const client = await clientPromise;
    const collection = client.db(DB.MAIN_DB).collection(USER_DETAILS_COLL);
    const res = await collection.insertOne(details);
    if (res){
        if (res.insertedId){
           return true
        }
    }
    return false;
  }

  export async function updateUserDetailsRole(userid:string,newrole:string):Promise<boolean> {
    console.log("updateuserrole called");
    const client = await clientPromise;
    const collection = client.db(DB.MAIN_DB).collection(USER_DETAILS_COLL);
    const res = await  collection.updateOne(
      { userid: userid },
      { $set: { 'role': newrole } }
    );
    if (res.matchedCount==1){
        return true;
    } else {
        return false;
    }
  }

  export async function getUserDetails(userid:string):Promise<UserDetails|null> {
    const client = await clientPromise;
    const collection = client.db(DB.MAIN_DB).collection(USER_DETAILS_COLL);
    console.log("finding ud "+userid);
    const ud =  await collection.findOne({userid:userid},{ projection: { _id: 0}}) as UserDetails;
    console.log("resp"+JSON.stringify(ud));
    return ud;
  }

  export async function getUserList():Promise<UserDetails[]|null> {
    const client = await clientPromise;
    const collection = client.db(DB.MAIN_DB).collection(USER_DETAILS_COLL);
    console.log("finding all users");
  
  const results = await collection.find().toArray();
 console.log(results);
  return results;
  }