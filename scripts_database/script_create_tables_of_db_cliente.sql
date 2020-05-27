USE cliente;

CREATE TABLE TB_CARGO (
       ID_CARGO INT NOT NULL PRIMARY KEY IDENTITY(1,1),
       NM_CARGO VARCHAR(50) NOT NULL,
	   FL_ATIVO BIT NOT NULL DEFAULT 1
	   );

EXEC sys.sp_addextendedproperty "MS_Description", "Chave prim�ria que guarda o ID do Cargo", "user", "dbo", "table", "TB_CARGO", "column", "ID_CARGO"
EXEC sys.sp_addextendedproperty "MS_Description", "Campo que guarda o nome do Cargo", "user", "dbo", "table", "TB_CARGO", "column", "NM_CARGO"
EXEC sys.sp_addextendedproperty "MS_Description", "Flag que indica se o registro est� ativo ou n�o", "user", "dbo", "table", "TB_CARGO", "column", "FL_ATIVO"

CREATE TABLE TB_ENDERECO (
       ID_ENDERECO INT NOT NULL PRIMARY KEY IDENTITY(1,1),
       DS_CEP VARCHAR(10) NOT NULL,
       DS_LOGRADOURO VARCHAR(100) NOT NULL,
       NR_IMOVEL INT NOT NULL,
       DS_COMPLEMENTO VARCHAR(50) NULL,
       NM_BAIRRO VARCHAR(50) NOT NULL,
       NM_LOCALIDADE VARCHAR(50) NOT NULL,
       NM_ESTADO VARCHAR(50) NOT NULL,
	   FL_ATIVO BIT NOT NULL DEFAULT 1
	   );

EXEC sys.sp_addextendedproperty "MS_Description", "Chave prim�ria que guarda o ID do Endere�o", "user", "dbo", "table", "TB_ENDERECO", "column", "ID_ENDERECO"
EXEC sys.sp_addextendedproperty "MS_Description", "Campo que guarda o cep do endere�o", "user", "dbo", "table", "TB_ENDERECO", "column", "DS_CEP"
EXEC sys.sp_addextendedproperty "MS_Description", "Campo que guarda a descri��o do logradouro", "user", "dbo", "table", "TB_ENDERECO", "column", "DS_LOGRADOURO"
EXEC sys.sp_addextendedproperty "MS_Description", "Campo que guarda o n�mero do im�vel", "user", "dbo", "table", "TB_ENDERECO", "column", "NR_IMOVEL"
EXEC sys.sp_addextendedproperty "MS_Description", "Campo que guarda o complemento do n�mero do im�vel", "user", "dbo", "table", "TB_ENDERECO", "column", "DS_COMPLEMENTO"
EXEC sys.sp_addextendedproperty "MS_Description", "Campo que guarda o nome do bairro", "user", "dbo", "table", "TB_ENDERECO", "column", "NM_BAIRRO"
EXEC sys.sp_addextendedproperty "MS_Description", "Campo que guarda o nome da localidade", "user", "dbo", "table", "TB_ENDERECO", "column", "NM_LOCALIDADE"
EXEC sys.sp_addextendedproperty "MS_Description", "Campo que guarda a sigla do estado", "user", "dbo", "table", "TB_ENDERECO", "column", "NM_ESTADO"
EXEC sys.sp_addextendedproperty "MS_Description", "Flag que indica se o registro est� ativo ou n�o", "user", "dbo", "table", "TB_ENDERECO", "column", "FL_ATIVO"

CREATE TABLE TB_CLIENTE (
       ID_CLIENTE INT NOT NULL PRIMARY KEY IDENTITY(1,1),
       NM_CLIENTE VARCHAR(100) NOT NULL,
       DS_CPF VARCHAR(14) NOT NULL,
       DT_NASCIMENTO DATE NULL,
       DS_SEXO VARCHAR(10) NULL,
       DS_EMAIL VARCHAR(50) NOT NULL,
       DS_SENHA VARCHAR(50) NOT NULL,
       ID_ENDERECO INT NOT NULL,
       ID_CARGO INT NOT NULL,
	   FL_ATIVO BIT NOT NULL DEFAULT 1
	   );

EXEC sys.sp_addextendedproperty "MS_Description", "Chave prim�ria que guarda o ID do Cliente", "user", "dbo", "table", "TB_CLIENTE", "column", "ID_CLIENTE"
EXEC sys.sp_addextendedproperty "MS_Description", "Campo que guarda o nome do Cliente", "user", "dbo", "table", "TB_CLIENTE", "column", "NM_CLIENTE"
EXEC sys.sp_addextendedproperty "MS_Description", "Campo que guarda a descri��o do CPF do Cliente", "user", "dbo", "table", "TB_CLIENTE", "column", "DS_CPF"
EXEC sys.sp_addextendedproperty "MS_Description", "Campo que guarda a data de nascimento do Cliente", "user", "dbo", "table", "TB_CLIENTE", "column", "DT_NASCIMENTO"
EXEC sys.sp_addextendedproperty "MS_Description", "Campo que guarda a descri��o do sexo do Cliente", "user", "dbo", "table", "TB_CLIENTE", "column", "DS_SEXO"
EXEC sys.sp_addextendedproperty "MS_Description", "Campo que guarda a descri��o do e-mail do Cliente", "user", "dbo", "table", "TB_CLIENTE", "column", "DS_EMAIL"
EXEC sys.sp_addextendedproperty "MS_Description", "Campo que guarda a descri��o da senha do Cliente", "user", "dbo", "table", "TB_CLIENTE", "column", "DS_SENHA"
EXEC sys.sp_addextendedproperty "MS_Description", "Chave estrangeira que guarda o ID do Endere�o", "user", "dbo", "table", "TB_CLIENTE", "column", "ID_ENDERECO"
EXEC sys.sp_addextendedproperty "MS_Description", "Chave estrangeira que guarda o ID do cargo", "user", "dbo", "table", "TB_CLIENTE", "column", "ID_CARGO"
EXEC sys.sp_addextendedproperty "MS_Description", "Flag que indica se o registro est� ativo ou n�o", "user", "dbo", "table", "TB_CLIENTE", "column", "FL_ATIVO"

ALTER TABLE TB_CLIENTE ADD CONSTRAINT TB_CLIENTE_TB_ENDERECO_FK FOREIGN KEY (ID_ENDERECO) REFERENCES TB_ENDERECO(ID_ENDERECO);

ALTER TABLE TB_CLIENTE ADD CONSTRAINT TB_CLIENTE_TB_CARGO_FK FOREIGN KEY (ID_CARGO) REFERENCES TB_CARGO(ID_CARGO);