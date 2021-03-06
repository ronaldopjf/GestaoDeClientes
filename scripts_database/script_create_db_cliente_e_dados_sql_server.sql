USE [master]
GO
/****** Object:  Database [cliente]    Script Date: 29/05/2020 16:35:27 ******/
CREATE DATABASE [cliente]
 CONTAINMENT = NONE
 ON  PRIMARY 
( NAME = N'cliente', FILENAME = N'C:\Program Files\Microsoft SQL Server\MSSQL14.SQLEXPRESS\MSSQL\DATA\cliente.mdf' , SIZE = 8192KB , MAXSIZE = UNLIMITED, FILEGROWTH = 65536KB )
 LOG ON 
( NAME = N'cliente_log', FILENAME = N'C:\Program Files\Microsoft SQL Server\MSSQL14.SQLEXPRESS\MSSQL\DATA\cliente_log.ldf' , SIZE = 8192KB , MAXSIZE = 2048GB , FILEGROWTH = 65536KB )
GO
ALTER DATABASE [cliente] SET COMPATIBILITY_LEVEL = 140
GO
IF (1 = FULLTEXTSERVICEPROPERTY('IsFullTextInstalled'))
begin
EXEC [cliente].[dbo].[sp_fulltext_database] @action = 'enable'
end
GO
ALTER DATABASE [cliente] SET ANSI_NULL_DEFAULT OFF 
GO
ALTER DATABASE [cliente] SET ANSI_NULLS OFF 
GO
ALTER DATABASE [cliente] SET ANSI_PADDING OFF 
GO
ALTER DATABASE [cliente] SET ANSI_WARNINGS OFF 
GO
ALTER DATABASE [cliente] SET ARITHABORT OFF 
GO
ALTER DATABASE [cliente] SET AUTO_CLOSE ON 
GO
ALTER DATABASE [cliente] SET AUTO_SHRINK OFF 
GO
ALTER DATABASE [cliente] SET AUTO_UPDATE_STATISTICS ON 
GO
ALTER DATABASE [cliente] SET CURSOR_CLOSE_ON_COMMIT OFF 
GO
ALTER DATABASE [cliente] SET CURSOR_DEFAULT  GLOBAL 
GO
ALTER DATABASE [cliente] SET CONCAT_NULL_YIELDS_NULL OFF 
GO
ALTER DATABASE [cliente] SET NUMERIC_ROUNDABORT OFF 
GO
ALTER DATABASE [cliente] SET QUOTED_IDENTIFIER OFF 
GO
ALTER DATABASE [cliente] SET RECURSIVE_TRIGGERS OFF 
GO
ALTER DATABASE [cliente] SET  ENABLE_BROKER 
GO
ALTER DATABASE [cliente] SET AUTO_UPDATE_STATISTICS_ASYNC OFF 
GO
ALTER DATABASE [cliente] SET DATE_CORRELATION_OPTIMIZATION OFF 
GO
ALTER DATABASE [cliente] SET TRUSTWORTHY OFF 
GO
ALTER DATABASE [cliente] SET ALLOW_SNAPSHOT_ISOLATION OFF 
GO
ALTER DATABASE [cliente] SET PARAMETERIZATION SIMPLE 
GO
ALTER DATABASE [cliente] SET READ_COMMITTED_SNAPSHOT OFF 
GO
ALTER DATABASE [cliente] SET HONOR_BROKER_PRIORITY OFF 
GO
ALTER DATABASE [cliente] SET RECOVERY SIMPLE 
GO
ALTER DATABASE [cliente] SET  MULTI_USER 
GO
ALTER DATABASE [cliente] SET PAGE_VERIFY CHECKSUM  
GO
ALTER DATABASE [cliente] SET DB_CHAINING OFF 
GO
ALTER DATABASE [cliente] SET FILESTREAM( NON_TRANSACTED_ACCESS = OFF ) 
GO
ALTER DATABASE [cliente] SET TARGET_RECOVERY_TIME = 60 SECONDS 
GO
ALTER DATABASE [cliente] SET DELAYED_DURABILITY = DISABLED 
GO
ALTER DATABASE [cliente] SET QUERY_STORE = OFF
GO
USE [cliente]
GO
/****** Object:  Table [dbo].[TB_CARGO]    Script Date: 29/05/2020 16:35:27 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[TB_CARGO](
	[ID_CARGO] [int] IDENTITY(1,1) NOT NULL,
	[NM_CARGO] [varchar](50) NOT NULL,
	[FL_ATIVO] [bit] NOT NULL,
PRIMARY KEY CLUSTERED 
(
	[ID_CARGO] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[TB_CLIENTE]    Script Date: 29/05/2020 16:35:27 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[TB_CLIENTE](
	[ID_CLIENTE] [int] IDENTITY(1,1) NOT NULL,
	[NM_CLIENTE] [varchar](100) NOT NULL,
	[DS_CPF] [varchar](14) NOT NULL,
	[DT_NASCIMENTO] [date] NULL,
	[DS_SEXO] [varchar](10) NULL,
	[DS_EMAIL] [varchar](50) NOT NULL,
	[DS_SENHA] [varchar](50) NOT NULL,
	[ID_ENDERECO] [int] NOT NULL,
	[ID_CARGO] [int] NOT NULL,
	[FL_ATIVO] [bit] NOT NULL,
PRIMARY KEY CLUSTERED 
(
	[ID_CLIENTE] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[TB_ENDERECO]    Script Date: 29/05/2020 16:35:27 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[TB_ENDERECO](
	[ID_ENDERECO] [int] IDENTITY(1,1) NOT NULL,
	[DS_CEP] [varchar](10) NOT NULL,
	[DS_LOGRADOURO] [varchar](100) NOT NULL,
	[NR_IMOVEL] [int] NOT NULL,
	[DS_COMPLEMENTO] [varchar](50) NULL,
	[NM_BAIRRO] [varchar](50) NOT NULL,
	[NM_LOCALIDADE] [varchar](50) NOT NULL,
	[NM_ESTADO] [varchar](50) NOT NULL,
	[FL_ATIVO] [bit] NOT NULL,
PRIMARY KEY CLUSTERED 
(
	[ID_ENDERECO] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
SET IDENTITY_INSERT [dbo].[TB_CARGO] ON 

INSERT [dbo].[TB_CARGO] ([ID_CARGO], [NM_CARGO], [FL_ATIVO]) VALUES (1, N'Administrador', 1)
INSERT [dbo].[TB_CARGO] ([ID_CARGO], [NM_CARGO], [FL_ATIVO]) VALUES (2, N'Gerente', 1)
INSERT [dbo].[TB_CARGO] ([ID_CARGO], [NM_CARGO], [FL_ATIVO]) VALUES (3, N'Chefe de Departamento', 1)
SET IDENTITY_INSERT [dbo].[TB_CARGO] OFF
SET IDENTITY_INSERT [dbo].[TB_CLIENTE] ON 

INSERT [dbo].[TB_CLIENTE] ([ID_CLIENTE], [NM_CLIENTE], [DS_CPF], [DT_NASCIMENTO], [DS_SEXO], [DS_EMAIL], [DS_SENHA], [ID_ENDERECO], [ID_CARGO], [FL_ATIVO]) VALUES (2, N'Ronaldo Rodrigo Pereira ', N'878.911.586-49', CAST(N'1976-08-05' AS Date), N'Masculino', N'ronaldopjf@gmail.com', N'Test@1', 1, 1, 1)
INSERT [dbo].[TB_CLIENTE] ([ID_CLIENTE], [NM_CLIENTE], [DS_CPF], [DT_NASCIMENTO], [DS_SEXO], [DS_EMAIL], [DS_SENHA], [ID_ENDERECO], [ID_CARGO], [FL_ATIVO]) VALUES (5, N'Sebastião Rosa Machado', N'021.462.357-98', CAST(N'1942-05-11' AS Date), N'Masculino', N'sebastiao@gmail.com', N'Test@1', 4, 2, 1)
INSERT [dbo].[TB_CLIENTE] ([ID_CLIENTE], [NM_CLIENTE], [DS_CPF], [DT_NASCIMENTO], [DS_SEXO], [DS_EMAIL], [DS_SENHA], [ID_ENDERECO], [ID_CARGO], [FL_ATIVO]) VALUES (6, N'Antônio Marcos dos Santos', N'052.426.347-75', CAST(N'1983-05-04' AS Date), N'Masculino', N'antonio@gmail.com', N'Test@1', 5, 3, 1)
INSERT [dbo].[TB_CLIENTE] ([ID_CLIENTE], [NM_CLIENTE], [DS_CPF], [DT_NASCIMENTO], [DS_SEXO], [DS_EMAIL], [DS_SENHA], [ID_ENDERECO], [ID_CARGO], [FL_ATIVO]) VALUES (11, N'Maria das Graças Vieira', N'878.909.506-59', CAST(N'2020-05-04' AS Date), N'Masculino', N'maria@mail.com', N'Test@1', 8, 3, 1)
INSERT [dbo].[TB_CLIENTE] ([ID_CLIENTE], [NM_CLIENTE], [DS_CPF], [DT_NASCIMENTO], [DS_SEXO], [DS_EMAIL], [DS_SENHA], [ID_ENDERECO], [ID_CARGO], [FL_ATIVO]) VALUES (13, N'Zezin', N'000.000.000-00', CAST(N'2020-05-04' AS Date), N'Outro', N'zezin@mail.com', N'Test@1', 10, 2, 1)
INSERT [dbo].[TB_CLIENTE] ([ID_CLIENTE], [NM_CLIENTE], [DS_CPF], [DT_NASCIMENTO], [DS_SEXO], [DS_EMAIL], [DS_SENHA], [ID_ENDERECO], [ID_CARGO], [FL_ATIVO]) VALUES (14, N'Ana Madalena', N'000.000.000-00', CAST(N'1968-05-25' AS Date), N'Masculino', N'ana@mail.com', N'Test@1', 11, 1, 1)
INSERT [dbo].[TB_CLIENTE] ([ID_CLIENTE], [NM_CLIENTE], [DS_CPF], [DT_NASCIMENTO], [DS_SEXO], [DS_EMAIL], [DS_SENHA], [ID_ENDERECO], [ID_CARGO], [FL_ATIVO]) VALUES (15, N'Pedrin', N'000.000.000-00', CAST(N'1992-11-11' AS Date), N'Masculino', N'pedrin@mail.com', N'Test@1', 12, 2, 1)
SET IDENTITY_INSERT [dbo].[TB_CLIENTE] OFF
SET IDENTITY_INSERT [dbo].[TB_ENDERECO] ON 

INSERT [dbo].[TB_ENDERECO] ([ID_ENDERECO], [DS_CEP], [DS_LOGRADOURO], [NR_IMOVEL], [DS_COMPLEMENTO], [NM_BAIRRO], [NM_LOCALIDADE], [NM_ESTADO], [FL_ATIVO]) VALUES (1, N'36090-340', N'Rua Paulo Garcia', 384, N'Apto 402', N'Benfica', N'Juiz de Fora', N'MG', 1)
INSERT [dbo].[TB_ENDERECO] ([ID_ENDERECO], [DS_CEP], [DS_LOGRADOURO], [NR_IMOVEL], [DS_COMPLEMENTO], [NM_BAIRRO], [NM_LOCALIDADE], [NM_ESTADO], [FL_ATIVO]) VALUES (4, N'36087-020', N'Avenida Doutor Bezerra de Menezes', 318, N'Casa 1', N'Nova Era', N'Juiz de Fora', N'MG', 1)
INSERT [dbo].[TB_ENDERECO] ([ID_ENDERECO], [DS_CEP], [DS_LOGRADOURO], [NR_IMOVEL], [DS_COMPLEMENTO], [NM_BAIRRO], [NM_LOCALIDADE], [NM_ESTADO], [FL_ATIVO]) VALUES (5, N'36087-020', N'Avenida Doutor Bezerra de Menezes', 345, N'sdfg', N'Nova Era', N'Juiz de Fora', N'MG', 1)
INSERT [dbo].[TB_ENDERECO] ([ID_ENDERECO], [DS_CEP], [DS_LOGRADOURO], [NR_IMOVEL], [DS_COMPLEMENTO], [NM_BAIRRO], [NM_LOCALIDADE], [NM_ESTADO], [FL_ATIVO]) VALUES (8, N'36090-340', N'Rua Paulo Garcia', 420, N'Apto 402', N'Benfica', N'Juiz de Fora', N'MG', 1)
INSERT [dbo].[TB_ENDERECO] ([ID_ENDERECO], [DS_CEP], [DS_LOGRADOURO], [NR_IMOVEL], [DS_COMPLEMENTO], [NM_BAIRRO], [NM_LOCALIDADE], [NM_ESTADO], [FL_ATIVO]) VALUES (10, N'36052-450', N'Rua Missões', 256, N'Casa', N'Nossa Senhora Aparecida', N'Juiz de Fora', N'MG', 1)
INSERT [dbo].[TB_ENDERECO] ([ID_ENDERECO], [DS_CEP], [DS_LOGRADOURO], [NR_IMOVEL], [DS_COMPLEMENTO], [NM_BAIRRO], [NM_LOCALIDADE], [NM_ESTADO], [FL_ATIVO]) VALUES (11, N'36052-450', N'Rua Missões', 256, N'Fundos', N'Nossa Senhora Aparecida', N'Juiz de Fora', N'MG', 1)
INSERT [dbo].[TB_ENDERECO] ([ID_ENDERECO], [DS_CEP], [DS_LOGRADOURO], [NR_IMOVEL], [DS_COMPLEMENTO], [NM_BAIRRO], [NM_LOCALIDADE], [NM_ESTADO], [FL_ATIVO]) VALUES (12, N'31320-120', N'Rua Ápio Cardoso da Paixão', 1235, N'Apto 405', N'Ouro Preto', N'Belo Horizonte', N'MG', 1)
SET IDENTITY_INSERT [dbo].[TB_ENDERECO] OFF
ALTER TABLE [dbo].[TB_CARGO] ADD  DEFAULT ((1)) FOR [FL_ATIVO]
GO
ALTER TABLE [dbo].[TB_CLIENTE] ADD  DEFAULT ((1)) FOR [FL_ATIVO]
GO
ALTER TABLE [dbo].[TB_ENDERECO] ADD  DEFAULT ((1)) FOR [FL_ATIVO]
GO
ALTER TABLE [dbo].[TB_CLIENTE]  WITH CHECK ADD  CONSTRAINT [TB_CLIENTE_TB_CARGO_FK] FOREIGN KEY([ID_CARGO])
REFERENCES [dbo].[TB_CARGO] ([ID_CARGO])
GO
ALTER TABLE [dbo].[TB_CLIENTE] CHECK CONSTRAINT [TB_CLIENTE_TB_CARGO_FK]
GO
ALTER TABLE [dbo].[TB_CLIENTE]  WITH CHECK ADD  CONSTRAINT [TB_CLIENTE_TB_ENDERECO_FK] FOREIGN KEY([ID_ENDERECO])
REFERENCES [dbo].[TB_ENDERECO] ([ID_ENDERECO])
GO
ALTER TABLE [dbo].[TB_CLIENTE] CHECK CONSTRAINT [TB_CLIENTE_TB_ENDERECO_FK]
GO
EXEC sys.sp_addextendedproperty @name=N'MS_Description', @value=N'Chave primária que guarda o ID do Cargo' , @level0type=N'SCHEMA',@level0name=N'dbo', @level1type=N'TABLE',@level1name=N'TB_CARGO', @level2type=N'COLUMN',@level2name=N'ID_CARGO'
GO
EXEC sys.sp_addextendedproperty @name=N'MS_Description', @value=N'Campo que guarda o nome do Cargo' , @level0type=N'SCHEMA',@level0name=N'dbo', @level1type=N'TABLE',@level1name=N'TB_CARGO', @level2type=N'COLUMN',@level2name=N'NM_CARGO'
GO
EXEC sys.sp_addextendedproperty @name=N'MS_Description', @value=N'Flag que indica se o registro está ativo ou não' , @level0type=N'SCHEMA',@level0name=N'dbo', @level1type=N'TABLE',@level1name=N'TB_CARGO', @level2type=N'COLUMN',@level2name=N'FL_ATIVO'
GO
EXEC sys.sp_addextendedproperty @name=N'MS_Description', @value=N'Chave primária que guarda o ID do Cliente' , @level0type=N'SCHEMA',@level0name=N'dbo', @level1type=N'TABLE',@level1name=N'TB_CLIENTE', @level2type=N'COLUMN',@level2name=N'ID_CLIENTE'
GO
EXEC sys.sp_addextendedproperty @name=N'MS_Description', @value=N'Campo que guarda o nome do Cliente' , @level0type=N'SCHEMA',@level0name=N'dbo', @level1type=N'TABLE',@level1name=N'TB_CLIENTE', @level2type=N'COLUMN',@level2name=N'NM_CLIENTE'
GO
EXEC sys.sp_addextendedproperty @name=N'MS_Description', @value=N'Campo que guarda a descrição do CPF do Cliente' , @level0type=N'SCHEMA',@level0name=N'dbo', @level1type=N'TABLE',@level1name=N'TB_CLIENTE', @level2type=N'COLUMN',@level2name=N'DS_CPF'
GO
EXEC sys.sp_addextendedproperty @name=N'MS_Description', @value=N'Campo que guarda a data de nascimento do Cliente' , @level0type=N'SCHEMA',@level0name=N'dbo', @level1type=N'TABLE',@level1name=N'TB_CLIENTE', @level2type=N'COLUMN',@level2name=N'DT_NASCIMENTO'
GO
EXEC sys.sp_addextendedproperty @name=N'MS_Description', @value=N'Campo que guarda a descrição do sexo do Cliente' , @level0type=N'SCHEMA',@level0name=N'dbo', @level1type=N'TABLE',@level1name=N'TB_CLIENTE', @level2type=N'COLUMN',@level2name=N'DS_SEXO'
GO
EXEC sys.sp_addextendedproperty @name=N'MS_Description', @value=N'Campo que guarda a descrição do e-mail do Cliente' , @level0type=N'SCHEMA',@level0name=N'dbo', @level1type=N'TABLE',@level1name=N'TB_CLIENTE', @level2type=N'COLUMN',@level2name=N'DS_EMAIL'
GO
EXEC sys.sp_addextendedproperty @name=N'MS_Description', @value=N'Campo que guarda a descrição da senha do Cliente' , @level0type=N'SCHEMA',@level0name=N'dbo', @level1type=N'TABLE',@level1name=N'TB_CLIENTE', @level2type=N'COLUMN',@level2name=N'DS_SENHA'
GO
EXEC sys.sp_addextendedproperty @name=N'MS_Description', @value=N'Chave estrangeira que guarda o ID do Endereço' , @level0type=N'SCHEMA',@level0name=N'dbo', @level1type=N'TABLE',@level1name=N'TB_CLIENTE', @level2type=N'COLUMN',@level2name=N'ID_ENDERECO'
GO
EXEC sys.sp_addextendedproperty @name=N'MS_Description', @value=N'Chave estrangeira que guarda o ID do cargo' , @level0type=N'SCHEMA',@level0name=N'dbo', @level1type=N'TABLE',@level1name=N'TB_CLIENTE', @level2type=N'COLUMN',@level2name=N'ID_CARGO'
GO
EXEC sys.sp_addextendedproperty @name=N'MS_Description', @value=N'Flag que indica se o registro está ativo ou não' , @level0type=N'SCHEMA',@level0name=N'dbo', @level1type=N'TABLE',@level1name=N'TB_CLIENTE', @level2type=N'COLUMN',@level2name=N'FL_ATIVO'
GO
EXEC sys.sp_addextendedproperty @name=N'MS_Description', @value=N'Chave primária que guarda o ID do Endereço' , @level0type=N'SCHEMA',@level0name=N'dbo', @level1type=N'TABLE',@level1name=N'TB_ENDERECO', @level2type=N'COLUMN',@level2name=N'ID_ENDERECO'
GO
EXEC sys.sp_addextendedproperty @name=N'MS_Description', @value=N'Campo que guarda o cep do endereço' , @level0type=N'SCHEMA',@level0name=N'dbo', @level1type=N'TABLE',@level1name=N'TB_ENDERECO', @level2type=N'COLUMN',@level2name=N'DS_CEP'
GO
EXEC sys.sp_addextendedproperty @name=N'MS_Description', @value=N'Campo que guarda a descrição do logradouro' , @level0type=N'SCHEMA',@level0name=N'dbo', @level1type=N'TABLE',@level1name=N'TB_ENDERECO', @level2type=N'COLUMN',@level2name=N'DS_LOGRADOURO'
GO
EXEC sys.sp_addextendedproperty @name=N'MS_Description', @value=N'Campo que guarda o número do imóvel' , @level0type=N'SCHEMA',@level0name=N'dbo', @level1type=N'TABLE',@level1name=N'TB_ENDERECO', @level2type=N'COLUMN',@level2name=N'NR_IMOVEL'
GO
EXEC sys.sp_addextendedproperty @name=N'MS_Description', @value=N'Campo que guarda o complemento do número do imóvel' , @level0type=N'SCHEMA',@level0name=N'dbo', @level1type=N'TABLE',@level1name=N'TB_ENDERECO', @level2type=N'COLUMN',@level2name=N'DS_COMPLEMENTO'
GO
EXEC sys.sp_addextendedproperty @name=N'MS_Description', @value=N'Campo que guarda o nome do bairro' , @level0type=N'SCHEMA',@level0name=N'dbo', @level1type=N'TABLE',@level1name=N'TB_ENDERECO', @level2type=N'COLUMN',@level2name=N'NM_BAIRRO'
GO
EXEC sys.sp_addextendedproperty @name=N'MS_Description', @value=N'Campo que guarda o nome da localidade' , @level0type=N'SCHEMA',@level0name=N'dbo', @level1type=N'TABLE',@level1name=N'TB_ENDERECO', @level2type=N'COLUMN',@level2name=N'NM_LOCALIDADE'
GO
EXEC sys.sp_addextendedproperty @name=N'MS_Description', @value=N'Campo que guarda a sigla do estado' , @level0type=N'SCHEMA',@level0name=N'dbo', @level1type=N'TABLE',@level1name=N'TB_ENDERECO', @level2type=N'COLUMN',@level2name=N'NM_ESTADO'
GO
EXEC sys.sp_addextendedproperty @name=N'MS_Description', @value=N'Flag que indica se o registro está ativo ou não' , @level0type=N'SCHEMA',@level0name=N'dbo', @level1type=N'TABLE',@level1name=N'TB_ENDERECO', @level2type=N'COLUMN',@level2name=N'FL_ATIVO'
GO
USE [master]
GO
ALTER DATABASE [cliente] SET  READ_WRITE 
GO
