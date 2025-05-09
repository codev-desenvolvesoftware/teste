import { useState } from 'react';
import { useForm } from 'react-hook-form';

export default function Home() {
  const [submitted, setSubmitted] = useState(false);
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center py-10 px-4">
      <div className="bg-white rounded-xl shadow-xl p-8 max-w-md w-full">
        <h1 className="text-3xl font-bold text-center text-blue-600 mb-4">Página de Conversão</h1>
        <p className="text-center text-gray-600 mb-6">Fale conosco e leve sua presença digital ao próximo nível!</p>

        {!submitted ? (
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            <div>
              <input
                type="text"
                placeholder="Seu nome"
                {...register("name", { required: true })}
                className="w-full px-4 py-2 border rounded-lg"
              />
              {errors.name && <p className="text-red-500 text-sm">Nome é obrigatório.</p>}
            </div>

            <div>
              <input
                type="email"
                placeholder="Seu email"
                {...register("email", { required: true })}
                className="w-full px-4 py-2 border rounded-lg"
              />
              {errors.email && <p className="text-red-500 text-sm">Email é obrigatório.</p>}
            </div>

            <button type="submit" className="w-full bg-blue-600 text-white py-2 rounded-lg">
              Enviar
            </button>
          </form>
        ) : (
          <p className="text-green-600 text-center">Obrigado! Entraremos em contato em breve.</p>
        )}

        <div className="mt-6 text-center">
          <a
            href="https://wa.me/5511943665990"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-green-500 text-white px-4 py-2 rounded-lg"
          >
            Fale conosco no WhatsApp
          </a>
        </div>
      </div>
    </div>
  );
}
