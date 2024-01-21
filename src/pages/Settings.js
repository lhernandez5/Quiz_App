import SelectField from "../Components/SelectField";

const Settings = () =>{
    return(
        <form>
         <SelectField label="Category"/> 
         <SelectField label="Difficulty"/> 
         <SelectField label="Type"/>   
        </form>
    );
}

export default Settings;