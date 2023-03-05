import {useHistory} from 'react-router-dom'
import ProjectForm from '../projects/ProjectForm'
import styles from './NewProject.module.css'

function NewProject(){
    const history = useHistory()

    function createPost(project){

        //Initialize costs and services
        project.costs = 0
        project.services = []

        fetch('http://localhost:5000/projects',{
            method: 'POST',
            headers: {
                'Content-type': 'application/json',
            },
            body: JSON.stringify(project),
        })
        .then((resp) => resp.json())
        .then((data) => {
            console.log(data)
            //redirect
            history.push('/projects', {message: 'Projeto criado com sucesso!'})
        })
        .catch(err => console.log(err))

    }

    return (
     <div className={styles.newproject_container}>
        <h1>Criar projeto</h1>
        <p>Crie seus projetos para depois adicionar os serviços</p>
        <ProjectForm handleSubmit={createPost} btnText="Criar Projeto"/>
    </div>
    )
 }
 
 export default NewProject