import React from 'react';

interface SearchModalProps {
    isOpen: boolean; // Controle se o modal está aberto
    onClose: () => void; // Função para fechar o modal
}

const SearchModal: React.FC<SearchModalProps> = ({ isOpen, onClose }) => {
    if (!isOpen) return null; // Não renderiza nada se não estiver aberto

    return (
        <div className="fixed inset-1 flex items-center justify-center bg-black bg-opacity-50 z-50">
            <div className="bg-zinc-800 p-6 rounded-3xl shadow-lg flex flex-col w-2/6 h-2/6 z-50">
                <input
                    type="text"
                    className="border p-2 mt-2 rounded-full text-2xl bg-zinc-800 text-zinc-500"
                    placeholder="What you looking for?"
                />
                <button
                    onClick={onClose}
                    className="mt-20 w-44 px-4 py-2 ml-40 bg-green-400 hover:bg-green-600 text-zinc-800 text-xl rounded font-semibold"
                >
                    Fechar
                </button>
            </div>
        </div>
    );
};

export default SearchModal;
