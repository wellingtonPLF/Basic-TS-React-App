import { string } from 'yup';
import HomeView from './homeView'
import { useForm } from '@/app/shared/hooks/use-form.hook';

const HomeScript = () => {

    const [errors, form, setForm, formChanges] = useForm(
        {
            name: '',
            nickname: '',
            email: ''
        },
        {
            name: string().required('Name é campo obrigatório').min(3, 'Name precisa ser válido'),
            nickname: string().required('Nickname é campo obrigatório').length(14, 'Nickname precisa ser válido'),
            email: string().required('Email é campo obrigatório').email('O email precisa ser válido'),
        }
    )

    const formFieldProps: any = (key: keyof any) => ({
        value: form[key],
        onChange: (e: any) => setForm({ ...form, [key]: e.target.value }),
        error: errors[key] && formChanges[key],
        helpertext: formChanges[key] && errors[key]?.[0],
    });

    // formFieldProps('name').value
    // formFieldProps('name').onChange
    // formFieldProps('name').error //TRUE OR FALSE
    // formFieldProps('name').helpertext //MESSAGE ERROR

    return (
        <>
            <HomeView/>
        </>
    );
};

export default HomeScript;
