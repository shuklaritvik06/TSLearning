interface course {
  name: string;
  age: number;
}

let data: Partial<course> = {};

function hello(): course {
  return <course>data;
}

type A = Awaited<Promise<string>>;

let db: Required<course> = {
  name: "course",
  age: 23
};

let dc: Partial<Readonly<course>>;

interface CatInfo {
  age: number;
  breed: string;
}

type CatName = "miffy" | "boris" | "mordred";

const objects: Record<CatName, Partial<CatInfo>> = {
  miffy: {},
  boris: {},
  mordred: {}
};

type justapick = Pick<course, "name" | "age">;
type T1 = Exclude<string | number | (() => void), Function>;
type omittedAge = Omit<course, "age">;
type extract = Extract<"hello", "hello" | "ramesg">;
type T = NonNullable<string | number | undefined>;
type funcparams = Parameters<(name: string, age: number) => void>;
type returType = ReturnType<(name: string) => string>;
