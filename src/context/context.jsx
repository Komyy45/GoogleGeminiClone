import { createContext, useState } from "react";
import runChat from "../config/gemini";


export const Context = createContext();


export const ContextProvider = (props) => {

    const [isLoading , setIsLoading] = useState(false);
    const [response , setResPonse] = useState("");
    const [Question , setQuestion] = useState("");
    const [isCalled ,setIsCalled] = useState(false);
    const [Questions , setQuestions] = useState([]);

    const setDelay = (index , newRes) => {
        setTimeout(() => {
            setResPonse(<div className="w-full text-start content-box" dangerouslySetInnerHTML={{ __html:  newRes }} />);
        } , 75 * index)
    }


    const onSent = async (prompt) => {
        try {
        
        const txt = await runChat(prompt);
        const res = txt.split("**");
        let result = "";
        for(let i = 0; i < res.length; ++i){
            if(i === 0 || i % 2 !== 1){
                result += res[i];
            }
            else{
                result += `<br/><b>`+res[i]+`</b>`;
            }
        }
        let result2 = result.split('*').join('<br/>');
        let result3 = result2.split(" ");


        let accumuate = "";
        for(let i = 1; i  < result3.length ; i++){
            accumuate += ` ${result3[i]}`;
            setDelay(i , accumuate);
        }
        } catch (error) {
        console.error('Error during chat interaction:', error);
        }
        
    };

    const callApi = async (Question) => {
        const res = Questions;
        if(res[0] !== Question)
        res.unshift(Question);
        setQuestions(res);
        setIsCalled(true);
        setIsLoading(true);
        setQuestion(Question);
        await onSent(Question);
        setIsLoading(false);

    }

    const resetQuestionHistory = () => 
    {
        setQuestions([]);
    }


    const contextValue = {
        response ,
        isLoading ,
        onSent ,
        callApi,
        Question,
        isCalled,
        Questions ,
        setIsCalled ,
        resetQuestionHistory
    };

    return (
        <Context.Provider value={contextValue}>
        {props.children}
        </Context.Provider>
    );
};

