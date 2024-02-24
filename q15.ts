/**Ques # 15:
 Changing Guest List:You just heard that one of your guest can't make the dinner.so you need to send out a new sat of invitation.you'll have to think of someone else to invite.

 .Start with your program from exercise 14.Add a print statement at the end of your program stating the name of your guest who can't make it.

 .Modify your list, replacing the name of your guest who can't make it with the name of the new person you are inviting.

 .Print a second set of invitation message, one for each person who is still in your list.
 */

 let guestArr: string[] = ["Ali","Uzma","Mariyam","Saad"];

 let canNotAttend: string = "Mariyam";
 console.log(canNotAttend + " " + "can not make it, for Dinner");

 let newGuest:string = "Hassan"
 guestArr[guestArr.indexOf(canNotAttend)] = newGuest

 guestArr.map((Item) =>{
    console.log(`Dear ${Item}, You are cordinally invited to a Dinner`)
 });

 
