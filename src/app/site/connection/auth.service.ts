import { Injectable } from '@angular/core';
import * as firebase from 'firebase';
import { AngularFirestore } from '@angular/fire/firestore';
import { Listrec } from '../reclamation/list-rec/listrec.model';


@Injectable()

export class AuthService {
    isAuth : boolean=false;
    constructor(private firestore: AngularFirestore){}
    createNewUser(email: string, password: string){
        return new Promise(
            (reselve,reject) => {
                firebase.auth().createUserWithEmailAndPassword(email,password)
                .then(function(){
                    reselve();
                })
                .catch(function(error){
                    var errorCode = error.code;
                    var errorMessage = error.message;
                    console.log('Problem of creation a new account'+errorCode+errorMessage);
                    reject(error);
                });
            }
        )
    }
    signInUser(email:string, password: string){
        return new Promise(
            (resolve,reject) => {
                firebase.auth().signInWithEmailAndPassword(email,password).then(
                    () =>{
                        this.isAuth = true;
                        resolve();
                    },
                    (error) => {
                        this.isAuth = false;
                        reject(error);
                    }
                );
            }
        );
    }
    signOuntUser() {
        this.isAuth = false;
        firebase.auth().signOut();
    }
    getlistrec(){
        return this.firestore.collection('/rec').snapshotChanges();
    }
}