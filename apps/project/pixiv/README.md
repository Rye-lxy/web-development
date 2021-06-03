# Pixiv Counterfeit

This is a [Next.js](https://nextjs.org/) project, a counterfeit of [pixiv.net](pixiv.net).

The code for MySQL is available here:

```mysql
CREATE TABLE Artwork(
	uid varchar(8) PRIMARY KEY,
  name varchar(20) not NULL, 
  creator varchar(8),
  create_time Datetime
);

CREATE TABLE Author(
  uid varchar(8) PRIMARY KEY,
  name varchar(15) not NULL UNIQUE
);

CREATE TABLE Tag(
  name_zh varchar(20) PRIMARY KEY,
  name_en varchar(20) not NULL UNIQUE,
  name_ja varchar(20) not NULL UNIQUE
);

CREATE TABLE Label(
  artwork varchar(8) REFERENCES artwork(uid) ON DELETE CASCADE,
  tag varchar(20) REFERENCES tag(name_zh) ON DELETE CASCADE
);

ALTER TABLE Artwork ADD CONSTRAINT FOREIGN KEY Artwork(creator) REFERENCES Author(uid) ON DELETE CASCADE;
```

```mysql
INSERT INTO Author VALUES
("29075517", "赤ミソ"),
("14264762", "きのこ姫"),
("6466131", "Blu");

INSERT INTO Artwork VALUES
("76808476", "メルトリリス", "6466131", "2019-09-16 09:03")

INSERT INTO Artwork VALUES
("75873452", "ライネス", "29075517", "2019-07-23 18:28"),
("73192343", "紫式部", "14264762", "2019-02-15 02:27");

INSERT INTO Artwork VALUES
("82328977", "画道", "29075517", "2020-06-14 22:19")


INSERT INTO Artwork VALUES
("89704464","皐月","648285", "2020-05-08 23:40", 1303, 921),
("72881813","无题","14264762", "2019-01-28 02:23", 1105, 710);
```

```mysql
INSERT INTO Tag VALUES
("风景", "scenery", "風景"),
("五月", "May", "5月"),
("原创", "original", "オリジナル"),
("FGO", "FGO", "FGO"),
("Fate", "Fate", "Fate"),
("命运/冠位指定", "Fate/GrandOrder", "Fate/GrandOrder"),
("君主埃尔梅罗二世事件簿", "The Case Files of Lord El-Melloi II", "ロード・エルメロイⅡ世の事件簿"),
("莱妮丝(Fate)", "Reines(Fate)", "ライネス(Fate)"), 
("莱妮丝·埃尔梅罗·阿奇佐尔缇", "Reines El-Melloi Archisorte", "ライネス・エルメロイ・アーチゾルテ"),
("葛饰北斋(Fate)", "Katsushika Hokusai(Fate)", "葛飾北斎(Fate)"),
("紫式部(Fate)", "Murasaki Shikibu(Fate)", "紫式部(Fate)"),
("紫藤花", "wisteria", "藤の花"),
("Meltryllis", "Meltryllis", "メルトリリス"),
("泳装", "swimsuit", "水着"),
("Meltryllis(泳装)", "Meltryllis(swimsuit)", "メルトリリス(水着)"),
("女孩子", "girl", "女の子"),
("和服", "kimono", "和服");
```

```mysql
INSERT INTO Label VALUES
("72881813", "女孩子"),
("72881813", "和服"),
("72881813", "原创"),
("73192343", "紫式部(Fate)"),
("73192343", "紫藤花"),
("73192343", "命运/冠位指定"),
("73192343", "Fate"),
("73192343", "FGO"),
("75873452", "命运/冠位指定"),
("75873452", "君主埃尔梅罗二世事件簿"),
("75873452", "莱妮丝(Fate)"),
("75873452", "莱妮丝·埃尔梅罗·阿奇佐尔缇"),
("76808476", "FGO"),
("76808476", "Meltryllis"),
("76808476", "泳装"),
("76808476", "Meltryllis(泳装)"),
("82328977", "命运/冠位指定"),
("82328977", "葛饰北斋(Fate)"),
("82328977", "和服"),
("82328977", "FGO"),
("89704464", "风景"),
("89704464", "五月"),
("89704464", "原创");
```

```mysql
UPDATE tag SET color="#CD6155" WHERE name_zh="风景";
UPDATE tag SET color="#EC7063" WHERE name_zh="五月";
UPDATE tag SET color="#AF7AC5" WHERE name_zh="原创";
UPDATE tag SET color="#A569BD" WHERE name_zh="FGO";
UPDATE tag SET color="#5499C7" WHERE name_zh="Fate";
UPDATE tag SET color="#5DADE2" WHERE name_zh="命运/冠位指定";
UPDATE tag SET color="#48C9B0" WHERE name_zh="君主埃尔梅罗二世事件簿";
UPDATE tag SET color="#45B39D" WHERE name_zh="莱妮丝(Fate)";
UPDATE tag SET color="#52BE80" WHERE name_zh="莱妮丝·埃尔梅罗·阿奇佐尔缇";
UPDATE tag SET color="#58D68D" WHERE name_zh="葛饰北斋(Fate)";
UPDATE tag SET color="#E67E22" WHERE name_zh="紫式部(Fate)";
UPDATE tag SET color="#DC7633" WHERE name_zh="紫藤花";
UPDATE tag SET color="#5D6D7E" WHERE name_zh="Meltryllis";
UPDATE tag SET color="#F1C40F" WHERE name_zh="泳装";
UPDATE tag SET color="#B03A2E" WHERE name_zh="Meltryllis(泳装)";
UPDATE tag SET color="#6C3483" WHERE name_zh="女孩子";
UPDATE tag SET color="#2874A6" WHERE name_zh="和服";
```

