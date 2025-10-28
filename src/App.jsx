import { useState } from 'react'
import { Button } from 'primereact/button';
import { Calendar } from 'primereact/calendar';
import { FloatLabel } from 'primereact/floatlabel';
import { RadioButton } from "primereact/radiobutton";
import InputField from './component/InputField';
import 'primereact/resources/themes/lara-light-cyan/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';


function App() {
  const [date, setDate] = useState(null);

  const [ingredient, setIngredient] = useState('');

  return (
      <div className="min-h-screen flex justify-center items-center bg-black ">
      <div className="p-10 rounded-2xl bg-white/10 border border-white/40 ">
        <h2 className="text-white text-2xl font-semibold text-center pb-6">
          Kayıt Olun
        </h2>

        <form className="space-y-6 w-90">
            <InputField
              id="username"
              label="Kullanıcı Adı"
              type="text"
              roworcol="col"
            />   
          <InputField
              id="password"
              label="Şifre"
              type="password"
              roworcol="col"
            />   
            <InputField
              id="email"
              label="Email"
              type="email"
              roworcol="col"
            />

          <FloatLabel>
          <Calendar inputId="birth_date" value={date} onChange={(e) => setDate(e.value)} />
          <label htmlFor="birth_date">Doğum günü</label>
          </FloatLabel>

          <div className="flex items-center gap-1">
            <label htmlFor="gender" className=" text-white pl-3">Cinsiyet:</label>
             <RadioButton inputId="ingredient1" name="gender" value="Male" onChange={(e) => setIngredient(e.value)} checked={ingredient === 'Male'} />
                 <label htmlFor="ingredient1" className="pl-1 text-white">Erkek</label>
                  <RadioButton inputId="ingredient2" name="gender" value="Female" onChange={(e) => setIngredient(e.value)} checked={ingredient === 'Female'} />
                 <label htmlFor="ingredient2" className="pl-1 text-white">Kadın</label>
                 </div>

          <div className="flex justify-between text-sm text-white/80">
            <label className="flex items-center gap-2">
              <input type="checkbox" className="accent-white" />
              <span>Beni Hatırla</span>
            </label>
            <a href="#" className="hover:underline">Şifremi Unuttum?</a>
          </div>

             <Button label="Kaydol" className="w-full " severity="success"/>

          <p className="text-center text-white/80 pt-4 text-sm">
            Hesabınız var mı?{' '}
            <a href="#" className="text-white font-semibold hover:underline">Giriş Yap</a>
          </p>
        </form>
      </div>
    </div>
  );
}

export default App;