import { useState } from 'react';
import { Checkbox } from '../../../../components/Checkbox/Checkbox';
import { Input } from '../../../../components/Input/Input';
import { Select } from '../../../../components/Select/Select';
import { DOCUMENT_OPTIONS } from '../../../../utils/constants';
import './styles.scss';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import { PlanServices, UserServices } from '../../../../services';
import { useUserStore } from '../../../../hooks/store/userStore';
import { usePlanStore } from '../../../../hooks/store/planStore';
import { useUiStore } from '../../../../hooks/store/uiStore';

type FormInfo = {
  document_type: {
    value: string;
    label: string;
    required: boolean;
  };
  document_number: {
    value: string;
    label: string;
    required: boolean;
  };
  cellphone: {
    value: string;
    label: string;
    required: boolean;
  };
  privacy_policies: {
    value: boolean;
    label: string;
    required: boolean;
  };
  communication_policies: {
    value: boolean;
    label: string;
    required: boolean;
  };
};

export const Form = () => {
  const navigate = useNavigate();
  const {setUser} = useUserStore();
  const {setPlansData} = usePlanStore();
  const {showLoading, hideLoading} = useUiStore();
  
  const [formInfo, setFormInfo] = useState<FormInfo>({
    document_type: {
      value: 'dni',
      label: 'Tipo de Documento',
      required: true
    },
    document_number: {
      value: '',
      label: 'Nro. de Documento',
      required: true
    },
    cellphone: {
      value: '',
      label: 'Celular',
      required: true
    },
    privacy_policies: {
      value: false,
      label: 'Política de Privacidad',
      required: true
    },
    communication_policies: {
      value: false,
      label: 'Política de Comunicaciones Comerciales',
      required: true
    },
  });

  const onInputChange = (name: keyof FormInfo, value: string | boolean) => {
    if (typeof value === 'string') {
      setFormInfo(prev => ({ ...prev,
        [name]: {
          value,
          label: prev[name].label,
          required: prev[name].required
        },
      }));
    } else {
      setFormInfo(prev => ({
        ...prev,
        [name]: {
          value: value,
          label: prev[name].label,
          required: prev[name].required
        },
      }));
    }
  };

  const handleSubmitForm = async () => {
    for (const [key, value] of Object.entries(formInfo)) {
      if(typeof value.value == 'string'){
        if(value.required && (value.value == '' || value.value == null)){
          toast(`El campo ${value.label} es requerido.`)
          return;
        }
      }else if (typeof value.value == 'boolean'){
        if(value.required && (value.value == false)){
          toast(`El campo ${value.label} es requerido.`)
          return;
        }
      }
    }
    showLoading()
    const user = await  UserServices.GetUser();
    setUser(user, formInfo.document_number.value, formInfo.cellphone.value);
    
    const plans = await  PlanServices.GetPlans();
    setPlansData(plans.list);
    hideLoading()
    navigate('/plans');
  }

  return (
    <div className="form-container">
      <div className="form-container__document">
        <Select
          variant="right"
          options={DOCUMENT_OPTIONS}
          onChange={e => onInputChange('document_type', e.target.value)}
        />
        <Input
          variant="left"
          label="Nro. de documento"
          onChange={e => onInputChange('document_number', e.target.value)}
        />
      </div>
      <Input
        label="Celular"
        onChange={e => onInputChange('cellphone', e.target.value)}
      />
      <Checkbox
        text="Acepto la Política de Privacidad"
        type="checkbox"
        checked={formInfo.privacy_policies.value}
        onChange={e => onInputChange('privacy_policies', e.target.checked)}
      />
      <Checkbox
        text="Acepto la Política de Comunicaciones Comerciales"
        type="checkbox"
        checked={formInfo.communication_policies.value}
        onChange={e =>
          onInputChange('communication_policies', e.target.checked)
        }
      />
      <a href="http://google.com" target="_blank" rel="noopener noreferrer">
        Aplican Términos y Condiciones.
      </a>
      <button onClick={handleSubmitForm}>Cotiza aquí</button>
    </div>
  );
};
