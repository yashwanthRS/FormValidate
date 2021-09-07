USE [UserForm]
GO

/****** Object:  Table [dbo].[Users1]    Script Date: 07-09-2021 18:42:42 ******/
SET ANSI_NULLS ON
GO

SET QUOTED_IDENTIFIER ON
GO

CREATE TABLE [dbo].[Users](
	[UserId] [int] IDENTITY(1,1) NOT NULL,
	[FirstName] [varchar](500) NULL,
	[LastName][varchar](500) NULL,
	[UserName] [varchar](500) NULL,
	[Email] [varchar](500) NULL,
	[User_Password] [varchar](500) NULL,
	[Mobile_number] [varchar](500) NULL,
	[City] [varchar](50) NULL,
	[Zipcode] [int] NULL
) ON [PRIMARY]
GO

select * from users

insert into dbo.Users( FirstName, LastName,UserName, Email, User_Password, Mobile_number, City, Zipcode) 
values	('Test','Test lastname','User1','testuser@gmail.com','userpassword','7946138520','Arizona','12345')
