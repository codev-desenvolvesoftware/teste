import { useState } from 'react';
import { useForm } from 'react-hook-form';

export default function Home() {
  const [submitted, setSubmitted] = useState(false);
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    setSubmitted(true);
    // Aqui você pode enviar o formulário para seu backend ou um serviço de envio como Formspree
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col justify-center items-center py-10">
      <div className="bg-white rounded-lg shadow-lg p-8 max-w-md w-full">
        <h1 className="text-3xl font-semibold text-center text-blue-600">Bem-vindo à nossa página</h1>
        <p className="text-gray-600 text-center mt-2 mb-4">Transforme sua ideia em sucesso. Fale conosco!</p>

        {!submitted ? (
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">Nome</label>
              <input
                type="text"
                {...register("name", { required: "Este campo é obrigatório" })}
                className="w-full px-4 py-2 mt-1 border border-gray-300 rounded-md"
              />
              {errors.name && <span className="text-red-600 text-xs">{errors.name.message}</span>}
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">Email</label>
              <input
                type="email"
                {...register("email", { required: "Este campo é obrigatório" })}
                className="w-full px-4 py-2 mt-1 border border-gray-300 rounded-md"
              />
              {errors.email && <span className="text-red-600 text-xs">{errors.email.message}</span>}
            </div>

            <button type="submit" className="w-full bg-blue-600 text-white py-2 rounded-md">Enviar</button>
          </form>
        ) : (
          <p className="text-center text-green-600">Obrigado! Entraremos em contato.</p>
        )}

        <div className="mt-8 text-center">
          <a
            href="https://wa.me/5511943665990" // Substitua pelo número do cliente
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-green-600 text-white py-2 px-4 rounded-md"
          >
            Fale conosco pelo WhatsApp
          </a>
        </div>
      </div>
    </div>
  );
}
