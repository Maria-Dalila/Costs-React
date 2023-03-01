import ProjectForm from '../projects/ProjectForm'
import styles from './NewProject.module.css'

function NewProject(){
    return (
     <div className={styles.newproject_container}>
        <h1>Criar projeto</h1>
        <p>Crie seus projetos para depois adicionar os serviços</p>
        <ProjectForm btnText="Criar Projeto"/>
    </div>
    )
 }
 
 export default NewProject