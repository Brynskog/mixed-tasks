function selectPeople(){
    let selectedPeople = [];
    let personList = [
        {Name: 'Person1', Gender: 'Male', Age: 26 },
        {Name: 'Person2', Gender: 'Male', Age: 36 },
        {Name: 'Person3', Gender: 'Male', Age: 39 },
        {Name: 'Person4', Gender: 'Male', Age: 42 },
        {Name: 'Person5', Gender: 'Male', Age: 41 },
        {Name: 'Person6', Gender: 'Male', Age: 29 },
        {Name: 'Person7', Gender: 'Male', Age: 32 },
        {Name: 'Person8', Gender: 'Female', Age: 26 },
        {Name: 'Person9', Gender: 'Female', Age: 30 },
        {Name: 'Person10', Gender: 'Female', Age: 36 },
        {Name: 'Person11', Gender: 'Female', Age: 40 },
        {Name: 'Person12', Gender: 'Female', Age: 21 },
    ];

    personList.forEach(function(key, value){
        if (personList[value].Gender === 'Male' && personList[value].Age >= 30 && personList[value].Age <= 40){
            selectedPeople.push(personList[value]);
        };
    });
    console.log(selectedPeople);
    return selectedPeople;
};

document.addEventListener('DOMContentLoaded', selectPeople(), false);