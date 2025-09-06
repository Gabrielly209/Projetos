CREATE TABLE Cliente (
    idCliente INT PRIMARY KEY,
    nome VARCHAR(100) NOT NULL,
    email VARCHAR(150) UNIQUE,
    telefone VARCHAR(20)
);

CREATE TABLE Livro (
    idLivro INT PRIMARY KEY,
    titulo VARCHAR(200) NOT NULL,
    anoPublicacao INT,
    isbn VARCHAR(20) UNIQUE
);

CREATE TABLE Autor (
    idAutor INT PRIMARY KEY,
    nome VARCHAR(100) NOT NULL,
    nacionalidade VARCHAR(100)
);

CREATE TABLE Emprestimo (
    idEmprestimo INT PRIMARY KEY,
    dataEmprestimo DATE NOT NULL,
    dataDevolucao DATE,
    idCliente INT,
    FOREIGN KEY (idCliente) REFERENCES Cliente(idCliente)
);

-- Relacionamento Livro - Autor (N:N)
CREATE TABLE LivroAutor (
    idLivro INT,
    idAutor INT,
    PRIMARY KEY (idLivro, idAutor),
    FOREIGN KEY (idLivro) REFERENCES Livro(idLivro),
    FOREIGN KEY (idAutor) REFERENCES Autor(idAutor)
);

-- Relacionamento Emprestimo - Livro (N:N)
CREATE TABLE EmprestimoLivro (
    idEmprestimo INT,
    idLivro INT,
    PRIMARY KEY (idEmprestimo, idLivro),
    FOREIGN KEY (idEmprestimo) REFERENCES Emprestimo(idEmprestimo),
    FOREIGN KEY (idLivro) REFERENCES Livro(idLivro)
);
