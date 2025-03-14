import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";

import CreateSectionForm from "@/components/sections/CreateSectionForm";
import { db } from "@/lib/db";

const CourseCurriculumPage = async (
  props: {
    params: Promise<{ courseId: string }>;
  }
) => {
  const params = await props.params;
  const { userId } = await auth();

  if (!userId) {
    return redirect("/sign-in");
  }

  const course = await db.course.findUnique({
    where: {
      id: params.courseId,
      instructorId: userId,
    },
    include: {
      sections: {
        orderBy: {
          position: "asc",
        },
      },
    },
  });

  if (!course) {
    return redirect("/instructor/courses");
  }

  return <CreateSectionForm course={course} />;
};

export default CourseCurriculumPage;
