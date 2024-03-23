export const infoUser= async () =>{
    try{
        const response = await fetch('https://rimac-front-end-challenge.netlify.app/api/user.json');
        const data = await response.json();
        return data;
    }catch(error){
        console.log('Fetch Error', error);
        throw error; 
    }
}

export const plansUser = async () =>{
    try{
        const response = await fetch('https://rimac-front-end-challenge.netlify.app/api/plans.json');
        const data = await response.json();
        return data;
    }catch(error){
        console.log('Fetch Error', error);
        throw error; 
    }
}