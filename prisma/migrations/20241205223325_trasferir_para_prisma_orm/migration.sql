-- CreateTable
CREATE TABLE "Usuario" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "nome" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "senha" TEXT NOT NULL,
    "departamento" TEXT NOT NULL,
    "curso" TEXT NOT NULL,
    "fotoPerfil" BLOB,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL
);

-- CreateTable
CREATE TABLE "Disciplina" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "nome" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL
);

-- CreateTable
CREATE TABLE "Professor" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "nome" TEXT NOT NULL,
    "departamento" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL
);

-- CreateTable
CREATE TABLE "Avaliacao" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "usuarioId" INTEGER NOT NULL,
    "professorId" INTEGER NOT NULL,
    "disciplinaId" INTEGER NOT NULL,
    "conteudo" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    CONSTRAINT "Avaliacao_disciplinaId_fkey" FOREIGN KEY ("disciplinaId") REFERENCES "Disciplina" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Avaliacao_professorId_fkey" FOREIGN KEY ("professorId") REFERENCES "Professor" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Avaliacao_usuarioId_fkey" FOREIGN KEY ("usuarioId") REFERENCES "Usuario" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Comentarios" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "avaliacaoId" INTEGER NOT NULL,
    "usuarioId" INTEGER NOT NULL,
    "conteudo" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    CONSTRAINT "Comentarios_usuarioId_fkey" FOREIGN KEY ("usuarioId") REFERENCES "Usuario" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Comentarios_avaliacaoId_fkey" FOREIGN KEY ("avaliacaoId") REFERENCES "Avaliacao" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "_ProfessoresDisciplina" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL,
    CONSTRAINT "_ProfessoresDisciplina_A_fkey" FOREIGN KEY ("A") REFERENCES "Disciplina" ("id") ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT "_ProfessoresDisciplina_B_fkey" FOREIGN KEY ("B") REFERENCES "Professor" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- CreateIndex
CREATE UNIQUE INDEX "Usuario_email_key" ON "Usuario"("email");

-- CreateIndex
CREATE UNIQUE INDEX "_ProfessoresDisciplina_AB_unique" ON "_ProfessoresDisciplina"("A", "B");

-- CreateIndex
CREATE INDEX "_ProfessoresDisciplina_B_index" ON "_ProfessoresDisciplina"("B");
