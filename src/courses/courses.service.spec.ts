import { randomUUID } from 'node:crypto';
import { CoursesService } from './courses.service';
import { CreateCourseDTO } from './dto/create-course.dto';
import { UpdateCourseDTO } from './dto/update-course.dto';

describe('CoursesService unit tests', () => {
  let service: CoursesService;
  let id: string;
  let created_at: Date;
  let expectOutputTags: any;
  let expectOutputCourses: any;
  let mockCoursesRepository: any;
  let mockTagsRepository: any;

  beforeEach(async () => {
    service = new CoursesService();
    id = randomUUID();
    created_at = new Date();
    expectOutputTags = [
      {
        id,
        name: 'nest.js',
        created_at,
      },
    ];
    expectOutputCourses = [
      {
        id,
        name: 'test',
        description: 'test description',
        created_at,
        tags: expectOutputTags,
      },
    ];

    mockCoursesRepository = {
      create: jest.fn().mockReturnValue(Promise.resolve(expectOutputCourses)),
      save: jest.fn().mockReturnValue(Promise.resolve(expectOutputCourses)),
      update: jest.fn().mockReturnValue(Promise.resolve(expectOutputCourses)),
      preload: jest.fn().mockReturnValue(Promise.resolve(expectOutputCourses)),
      findAll: jest.fn().mockReturnValue(Promise.resolve(expectOutputCourses)),
      find: jest.fn().mockReturnValue(Promise.resolve(expectOutputCourses)),
      findOne: jest.fn().mockReturnValue(Promise.resolve(expectOutputCourses)),
      remove: jest.fn().mockReturnValue(Promise.resolve(expectOutputCourses)),
    };

    mockTagsRepository = {
      create: jest.fn().mockReturnValue(Promise.resolve(expectOutputTags)),
      findOne: jest.fn().mockReturnValue(Promise.resolve(expectOutputTags)),
    };
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should create a course', async () => {
    // @ts-expect-error defined part of methods
    service['courseRepository'] = mockCoursesRepository;
    // @ts-expect-error defined part of methods
    service['tagRepository'] = mockTagsRepository;

    const createCourseDTO: CreateCourseDTO = {
      name: 'test',
      description: 'test description',
      tags: ['nest.js'],
    };

    const newCourse = await service.create(createCourseDTO);

    expect(mockCoursesRepository.save).toHaveBeenCalled();
    expect(expectOutputCourses).toStrictEqual(newCourse);
  });

  it('should list all courses', async () => {
    // @ts-expect-error defined part of methods
    service['courseRepository'] = mockCoursesRepository;
    // @ts-expect-error defined part of methods
    service['tagRepository'] = mockTagsRepository;

    const courses = await service.findAll();

    expect(mockCoursesRepository.find).toHaveBeenCalled();
    expect(expectOutputCourses).toStrictEqual(courses);
  });

  it('should get a course by id', async () => {
    // @ts-expect-error defined part of methods
    service['courseRepository'] = mockCoursesRepository;
    // @ts-expect-error defined part of methods
    service['tagRepository'] = mockTagsRepository;

    const course = await service.findOne(id);

    expect(mockCoursesRepository.findOne).toHaveBeenCalled();
    expect(expectOutputCourses).toStrictEqual(course);
  });

  it('should update a course', async () => {
    // @ts-expect-error defined part of methods
    service['courseRepository'] = mockCoursesRepository;
    // @ts-expect-error defined part of methods
    service['tagRepository'] = mockTagsRepository;

    const updateCourseDTO: UpdateCourseDTO = {
      name: 'test',
      description: 'test description',
      tags: ['nest.js'],
    };

    const course = await service.update(id, updateCourseDTO);

    expect(mockCoursesRepository.save).toHaveBeenCalled();
    expect(mockCoursesRepository.preload).toHaveBeenCalled();
    expect(expectOutputCourses).toStrictEqual(course);
  });

  it('should remove a course', async () => {
    // @ts-expect-error defined part of methods
    service['courseRepository'] = mockCoursesRepository;
    // @ts-expect-error defined part of methods
    service['tagRepository'] = mockTagsRepository;

    const course = await service.remove(id);

    expect(mockCoursesRepository.findOne).toHaveBeenCalled();
    expect(mockCoursesRepository.remove).toHaveBeenCalled();
    expect(expectOutputCourses).toStrictEqual(course);
  });
});
