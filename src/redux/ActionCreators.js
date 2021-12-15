import * as ActionTypes from './ActionTypes';
import { baseUrl } from '../shared/baseUrl';


export const fetchNewspapers = () => (dispatch) => {

    dispatch(NewspapersLoading(true));

    return fetch(baseUrl + 'newspapers')
    .then(response => {
        if (response.ok) {
          return response;
        } else {
          var error = new Error('Error ' + response.status + ': ' + response.statusText);
          error.response = response;
          throw error;
        }
      },
      error => {
            var errmess = new Error(error.message);
            throw errmess;
      })
    .then(response => response.json())
    .then(newspapers => dispatch(addNewspapers(newspapers)))
    .catch(error => dispatch(NewspapersFailed(error.message)));
}

export const NewspapersLoading = () => ({
    type: ActionTypes.NEWSPAPERS_LOADING
});

export const NewspapersFailed = (errmess) => ({
    type: ActionTypes.NEWSPAPERS_FAILED,
    payload: errmess
});

export const addNewspapers = (newspapers) => ({
    type: ActionTypes.ADD_NEWSPAPERS,
    payload: newspapers
});


export const fetchMagazines = () => (dispatch) => {

    dispatch(MagazinesLoading(true));

    return fetch(baseUrl + 'magazines')
    .then(response => {
        if (response.ok) {
          return response;
        } else {
          var error = new Error('Error ' + response.status + ': ' + response.statusText);
          error.response = response;
          throw error;
        }
      },
      error => {
            var errmess = new Error(error.message);
            throw errmess;
      })
    .then(response => response.json())
    .then(magazines => dispatch(addMagazines(magazines)))
    .catch(error => dispatch(MagazinesFailed(error.message)));
}

export const MagazinesLoading = () => ({
    type: ActionTypes.MAGAZINES_LOADING
});

export const MagazinesFailed = (errmess) => ({
    type: ActionTypes.MAGAZINES_FAILED,
    payload: errmess
});

export const addMagazines = (magazines) => ({
    type: ActionTypes.ADD_MAGAZINES,
    payload: magazines
});


export const postFeedback = (firstname, lastname, telnum, email, agree, contactType, message) => (dispatch) => {
   
    const newFeedback = {
       firstname: firstname,
       lastname: lastname,
       telnum: telnum,
       email: email,
       agree: agree,
       contactType: contactType,
       message: message
     };
  
    
    return fetch(baseUrl + 'feedback', {
        method: "POST",
        body: JSON.stringify(newFeedback),
        headers: {
          "Content-Type": "application/json"
        },
        credentials: "same-origin"
    })
    .then(response => {
        if (response.ok) {
          return response;
        } else {
          var error = new Error('Error ' + response.status + ': ' + response.statusText);
          error.response = response;
          throw error;
        }
      },
      error => {
            throw error;
      })
    .then(response => response.json())
    .then(feedback => alert('Thank you for your feedback!\n'+ JSON.stringify(feedback)))
    .catch(error =>  { console.log('Post Feedback', error.message); alert('Your Feedback could not be posted\nError: '+error.message); });
  };