-- MySQL dump 10.13  Distrib 5.7.20, for Linux (i686)
--
-- Host: localhost    Database: dbtest1
-- ------------------------------------------------------
-- Server version	5.7.20-0ubuntu0.16.04.1

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Current Database: `dbtest1`
--

CREATE DATABASE /*!32312 IF NOT EXISTS*/ `dbtest1` /*!40100 DEFAULT CHARACTER SET latin1 */;

USE `dbtest1`;

--
-- Table structure for table `d`
--

DROP TABLE IF EXISTS `d`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `d` (
  `a` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `d`
--

LOCK TABLES `d` WRITE;
/*!40000 ALTER TABLE `d` DISABLE KEYS */;
INSERT INTO `d` VALUES ('2017-10-26 14:49:54'),('2017-10-19 21:00:00'),('2017-10-19 21:00:00'),('2017-10-19 21:00:00');
/*!40000 ALTER TABLE `d` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `device1`
--

DROP TABLE IF EXISTS `device1`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `device1` (
  `device_id` int(11) NOT NULL AUTO_INCREMENT,
  `type` int(11) DEFAULT NULL,
  `name` varchar(45) DEFAULT NULL,
  `model` varchar(45) DEFAULT NULL,
  `serial_number` varchar(45) DEFAULT NULL,
  `warranty` varchar(45) DEFAULT NULL,
  `about_device` varchar(100) DEFAULT NULL,
  `owner_id` int(11) DEFAULT NULL,
  `owner_group` varchar(45) DEFAULT NULL,
  `current_user_id` int(11) DEFAULT NULL,
  `last_user_id` int(11) DEFAULT NULL,
  `device_available` int(11) DEFAULT NULL,
  `available_after` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`device_id`)
) ENGINE=InnoDB AUTO_INCREMENT=40 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `device1`
--

LOCK TABLES `device1` WRITE;
/*!40000 ALTER TABLE `device1` DISABLE KEYS */;
INSERT INTO `device1` VALUES (38,5,'tpc1',NULL,'T234X56','4 years and agrement 456Z','Tablet pc, for software testing, be carefull when using',3,'6',1,7,NULL,NULL),(39,2,'Game-pc01',NULL,'X345S2R8','always','Computer for gamming and game development',6,'6',6,6,NULL,NULL);
/*!40000 ALTER TABLE `device1` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `license`
--

DROP TABLE IF EXISTS `license`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `license` (
  `license_id` int(11) NOT NULL AUTO_INCREMENT,
  `device_id` int(11) DEFAULT NULL,
  `license_code` varchar(45) DEFAULT NULL,
  `user` varchar(45) DEFAULT NULL,
  `pass` varchar(45) DEFAULT NULL,
  `name` varchar(45) DEFAULT NULL,
  `comments` varchar(100) DEFAULT NULL,
  PRIMARY KEY (`license_id`)
) ENGINE=InnoDB AUTO_INCREMENT=12 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `license`
--

LOCK TABLES `license` WRITE;
/*!40000 ALTER TABLE `license` DISABLE KEYS */;
INSERT INTO `license` VALUES (1,3,'Trial version','user0','123456','product text','default text'),(2,5,'Shareware','user0','not defined','Interesting softwareeee','just free software, download and enjoy'),(3,NULL,NULL,NULL,NULL,'unknown',NULL),(4,NULL,NULL,NULL,NULL,'unknown',NULL),(5,NULL,NULL,NULL,NULL,'unknown',NULL),(6,NULL,NULL,NULL,NULL,'unknown',NULL),(7,NULL,NULL,NULL,NULL,'unknown',NULL),(9,123,'yeah','user5','activate your license now !','unknown','just license description text'),(10,2,'S345XU47238','admin','S345XU47238','WindowsXP','operation system activation'),(11,0,'free','admin','none','OpenOffice','free software, no limited to use');
/*!40000 ALTER TABLE `license` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `test1`
--

DROP TABLE IF EXISTS `test1`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `test1` (
  `afield` varchar(20) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `test1`
--

LOCK TABLES `test1` WRITE;
/*!40000 ALTER TABLE `test1` DISABLE KEYS */;
INSERT INTO `test1` VALUES (NULL),(NULL),('jejejej'),('123jakljl'),('456');
/*!40000 ALTER TABLE `test1` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `user1`
--

DROP TABLE IF EXISTS `user1`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `user1` (
  `id_user` int(11) DEFAULT NULL,
  `fname` varchar(30) DEFAULT NULL,
  `lname` varchar(30) DEFAULT NULL,
  `status` varchar(30) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user1`
--

LOCK TABLES `user1` WRITE;
/*!40000 ALTER TABLE `user1` DISABLE KEYS */;
INSERT INTO `user1` VALUES (NULL,'hehhe','f_test1','developer'),(NULL,'petri','jokinen','admin'),(NULL,'petri','jokinen','admin'),(NULL,'petri','jokinen','admin'),(NULL,'kalle','kallio','user');
/*!40000 ALTER TABLE `user1` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `users` (
  `id_user` int(11) NOT NULL,
  `fname` varchar(45) DEFAULT NULL,
  `lname` varchar(45) DEFAULT NULL,
  `work_start` date DEFAULT NULL,
  `work_end` date DEFAULT NULL,
  `status` varchar(45) DEFAULT NULL,
  `title` varchar(45) DEFAULT NULL,
  `team` varchar(45) DEFAULT NULL,
  `phone` varchar(45) DEFAULT NULL,
  `keys` int(11) DEFAULT NULL,
  `lukoton` int(11) DEFAULT NULL,
  `active` int(11) DEFAULT NULL,
  `email` varchar(45) DEFAULT NULL,
  `slack` int(11) DEFAULT NULL,
  `comments` varchar(45) DEFAULT NULL,
  `school` varchar(45) DEFAULT NULL,
  `location` varchar(45) DEFAULT NULL,
  `userscol` varchar(45) DEFAULT NULL,
  `photo` varchar(45) DEFAULT NULL,
  `address` varchar(45) DEFAULT NULL,
  `ad_user` varchar(45) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES (0,'Ville','Kivinen',NULL,NULL,'Boss','Lord','Elite','',NULL,NULL,NULL,'top secret',NULL,'nothing to say','cambridge','eveywhere','no idea','undefined','top secret','don\'t have'),(0,'Ville','Kivinen',NULL,NULL,'Boss','Lord','Elite','',NULL,NULL,NULL,'top secret',NULL,'nothing to say','cambridge','eveywhere','no idea','undefined','top secret','don\'t have'),(0,'Maija','Meikäläinen',NULL,NULL,'At work','Qeen','Digitalents','070707070',NULL,NULL,NULL,'maija.meikalainen@testi.com',NULL,'jotain','Aalto Yliopisto','Helsinki','????','url','Mannerheimintie 1','dont have'),(0,'Maija','Meikäläinen',NULL,NULL,'At work','Qeen','Digitalents','070707070',NULL,NULL,NULL,'maija.meikalainen@testi.com',NULL,'jotain','Aalto Yliopisto','Helsinki','????','url','Mannerheimintie 1','dont have'),(0,'RRRR','ruriowuio',NULL,NULL,'5345453453','eqweqwe','','',NULL,NULL,NULL,'',NULL,'','','','','','',''),(0,'RRRR','ruriowuio',NULL,NULL,'5345453453','eqweqwe','','',NULL,NULL,NULL,'',NULL,'','','','','','',''),(0,'Jorma','Kallio',NULL,NULL,'helpdesk','123','workgroup','434234',NULL,NULL,NULL,'rwerwe',NULL,'rerwerwe','7489534789','','','','',''),(0,'Jorma','Kallio',NULL,NULL,'helpdesk','123','workgroup','434234',NULL,NULL,NULL,'rwerwe',NULL,'rerwerwe','7489534789','','','','',''),(0,'4234','rwrw',NULL,NULL,'eiwepo','djwdj3pdp9','','',NULL,NULL,NULL,'',NULL,'','','','','','',''),(0,'4234','rwrw',NULL,NULL,'eiwepo','djwdj3pdp9','','',NULL,NULL,NULL,'',NULL,'','','','','','',''),(0,'David','River',NULL,NULL,'working ','Tester','soft dev team','',NULL,NULL,NULL,'david.river@digitalents.fi',NULL,'yeah, just testing !','Metropolia univercity of aplied science','','','','street 45 R 678 G',''),(0,'David','River',NULL,NULL,'working ','Tester','soft dev team','',NULL,NULL,NULL,'david.river@digitalents.fi',NULL,'yeah, just testing !','Metropolia univercity of aplied science','','','','street 45 R 678 G',''),(0,'hello','world',NULL,NULL,'','','','yeah',NULL,NULL,NULL,'right',NULL,'','','','','','',''),(0,'hello','world',NULL,NULL,'','','','yeah',NULL,NULL,NULL,'right',NULL,'','','','','','',''),(0,'hello','world',NULL,NULL,'','','','yeah',NULL,NULL,NULL,'right',NULL,'','','','','','',''),(0,'Walter','Lake',NULL,NULL,'Tester','','','',NULL,NULL,NULL,'',NULL,'','','','','','',''),(0,'Walter','Lake',NULL,NULL,'Tester','','','',NULL,NULL,NULL,'',NULL,'','','','','','',''),(0,'Johannes','Ahvenniemi',NULL,NULL,'Developer','','','',NULL,NULL,NULL,'',NULL,'','','','','','',''),(0,'Matti','Meikäläinen',NULL,NULL,'Hired','','Digitalents','',NULL,NULL,NULL,'',NULL,'','','','','','',''),(0,'Johannes','Ahvenniemi',NULL,NULL,'Developer','','','',NULL,NULL,NULL,'',NULL,'','','','','','',''),(0,'Matti','Meikäläinen',NULL,NULL,'Hired','','Digitalents','',NULL,NULL,NULL,'',NULL,'','','','','','',''),(0,'Johannes','Ahvenniemi',NULL,NULL,'Developer','','','',NULL,NULL,NULL,'',NULL,'','','','','','','');
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users2`
--

DROP TABLE IF EXISTS `users2`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `users2` (
  `id_user` int(11) NOT NULL AUTO_INCREMENT,
  `fname` varchar(45) DEFAULT NULL,
  `lname` varchar(45) DEFAULT NULL,
  `work_start` datetime DEFAULT NULL,
  `work_end` datetime DEFAULT NULL,
  `status` varchar(45) DEFAULT NULL,
  `title` varchar(45) DEFAULT NULL,
  `team` varchar(45) DEFAULT NULL,
  `phone` varchar(45) DEFAULT NULL,
  `keys` int(11) DEFAULT NULL,
  `lukoton` int(11) DEFAULT NULL,
  `active` int(11) DEFAULT NULL,
  `email` varchar(45) DEFAULT NULL,
  `slack` int(11) DEFAULT NULL,
  `comments` varchar(45) DEFAULT NULL,
  `school` varchar(45) DEFAULT NULL,
  `location` varchar(45) DEFAULT NULL,
  `userscol` varchar(45) DEFAULT NULL,
  `photo` varchar(45) DEFAULT NULL,
  `address` varchar(45) DEFAULT NULL,
  `ad_user` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`id_user`)
) ENGINE=InnoDB AUTO_INCREMENT=141 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users2`
--

LOCK TABLES `users2` WRITE;
/*!40000 ALTER TABLE `users2` DISABLE KEYS */;
INSERT INTO `users2` VALUES (134,'Jorma2','Koivunen','1989-10-31 12:50:36','2023-10-31 12:50:49','At office','Boss','Leader','888 999 666 22',1,0,1,'jorma.koivunen@digitalents.fi',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),(135,'Ville','Kallio','1940-03-19 22:00:00','2069-01-23 22:00:00','At office','Boss','Boss team','888 45678978',5000,0,0,'ville.kallio@digitalents.fi',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),(136,'User1',NULL,NULL,NULL,NULL,NULL,NULL,NULL,0,1,1,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),(137,'User3',NULL,NULL,NULL,NULL,NULL,NULL,NULL,0,0,1,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),(138,'User45','testi',NULL,NULL,NULL,'test user 45',NULL,'34 5656',1,0,0,'user45.testi@digitalents.fi',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),(139,'user4','test',NULL,NULL,'ok',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),(140,'Kalle','Nieminen',NULL,NULL,NULL,'Sysadmin','ICT','3234234',NULL,NULL,NULL,'3423423',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL);
/*!40000 ALTER TABLE `users2` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2017-11-09 16:28:05
