import 'dart:developer';

import 'package:dart_appwrite/dart_appwrite.dart';

abstract class ScheduMate {
  static const String scheduDB = 'schedudb';
  static const String usersCollection = 'users';
  static const String groupCollection = 'group';
  static const String classesCollection = 'classes';
  static const String assignmentCollection = 'assignment';
}

/// Create users Collection
Future<void> createUsers(Databases db) async {
  try {
    await db.createCollection(
        databaseId: ScheduMate.scheduDB,
        collectionId: ScheduMate.usersCollection,
        name: 'Users');

    Future.wait([
      db.createStringAttribute(
          databaseId: ScheduMate.scheduDB,
          collectionId: ScheduMate.usersCollection,
          key: 'country',
          size: 255,
          xrequired: false),
      db.createDatetimeAttribute(
          databaseId: ScheduMate.scheduDB,
          collectionId: ScheduMate.usersCollection,
          key: 'datebirth',
          xrequired: false),
      db.createEmailAttribute(
          databaseId: ScheduMate.scheduDB,
          collectionId: ScheduMate.usersCollection,
          key: 'email',
          xrequired: false),
      db.createStringAttribute(
          databaseId: ScheduMate.scheduDB,
          collectionId: ScheduMate.usersCollection,
          key: 'firstname',
          size: 255,
          xrequired: false),
      db.createStringAttribute(
          databaseId: ScheduMate.scheduDB,
          collectionId: ScheduMate.usersCollection,
          key: 'lastname',
          size: 255,
          xrequired: false),
      db.createStringAttribute(
          databaseId: ScheduMate.scheduDB,
          collectionId: ScheduMate.usersCollection,
          key: 'gender',
          size: 10,
          xrequired: false),
      db.createStringAttribute(
          databaseId: ScheduMate.scheduDB,
          collectionId: ScheduMate.usersCollection,
          key: 'id',
          size: 255,
          xrequired: false),
      db.createIntegerAttribute(
          databaseId: ScheduMate.scheduDB,
          collectionId: ScheduMate.usersCollection,
          key: 'mobile',
          xrequired: false),
      db.createStringAttribute(
          databaseId: ScheduMate.scheduDB,
          collectionId: ScheduMate.usersCollection,
          key: 'program',
          size: 255,
          xrequired: false),
      db.createStringAttribute(
          databaseId: ScheduMate.scheduDB,
          collectionId: ScheduMate.usersCollection,
          key: 'term',
          size: 255,
          xrequired: false),
      db.createStringAttribute(
          databaseId: ScheduMate.scheduDB,
          collectionId: ScheduMate.usersCollection,
          key: 'university',
          size: 255,
          xrequired: false),
      db.createStringAttribute(
          databaseId: ScheduMate.scheduDB,
          collectionId: ScheduMate.usersCollection,
          key: 'year',
          size: 255,
          xrequired: false),
      db.createStringAttribute(
          databaseId: ScheduMate.scheduDB,
          collectionId: ScheduMate.usersCollection,
          key: 'college',
          size: 255,
          xrequired: false),
      db.createBooleanAttribute(
          databaseId: ScheduMate.scheduDB,
          collectionId: ScheduMate.usersCollection,
          key: 'isadmin',
          xrequired: false),
    ]);
  } catch (e) {
    log('UsersError: $e');
  }
}

/// Create group Collection
Future<void> createGroup(Databases db) async {
  try {
    await db.createCollection(
        databaseId: ScheduMate.scheduDB,
        collectionId: ScheduMate.groupCollection,
        name: 'Group');

    Future.wait([
      db.createStringAttribute(
          databaseId: ScheduMate.scheduDB,
          collectionId: ScheduMate.groupCollection,
          key: 'groupname',
          size: 255,
          xrequired: true),
      db.createStringAttribute(
          databaseId: ScheduMate.scheduDB,
          collectionId: ScheduMate.groupCollection,
          key: 'groupdescription',
          size: 255,
          xrequired: true),
      db.createIntegerAttribute(
          databaseId: ScheduMate.scheduDB,
          collectionId: ScheduMate.groupCollection,
          key: 'calenderid',
          xrequired: true),
      db.createStringAttribute(
          databaseId: ScheduMate.scheduDB,
          collectionId: ScheduMate.groupCollection,
          key: 'groupname',
          size: 255,
          xrequired: true),
      db.createStringAttribute(
          databaseId: ScheduMate.scheduDB,
          collectionId: ScheduMate.groupCollection,
          key: 'userid',
          size: 255,
          array: true,
          xrequired: false),
      db.createStringAttribute(
          databaseId: ScheduMate.scheduDB,
          collectionId: ScheduMate.groupCollection,
          key: 'adminid',
          size: 255,
          array: true,
          xrequired: true),
    ]);
  } catch (e) {
    log('GroupError: $e');
  }
}

/// Create classes Collection
Future<void> createClasses(Databases db) async {
  try {
    await db.createCollection(
        databaseId: ScheduMate.scheduDB,
        collectionId: ScheduMate.classesCollection,
        name: 'Classes');
    Future.wait([
      db.createStringAttribute(
          databaseId: ScheduMate.scheduDB,
          collectionId: ScheduMate.classesCollection,
          key: 'classcode',
          size: 255,
          xrequired: false),
      db.createStringAttribute(
          databaseId: ScheduMate.scheduDB,
          collectionId: ScheduMate.classesCollection,
          key: 'classroomno',
          size: 255,
          xrequired: false),
      db.createDatetimeAttribute(
          databaseId: ScheduMate.scheduDB,
          collectionId: ScheduMate.classesCollection,
          key: 'classtime',
          xrequired: false),
      db.createIntegerAttribute(
          databaseId: ScheduMate.scheduDB,
          collectionId: ScheduMate.classesCollection,
          key: 'durationhrs',
          xrequired: false),
      db.createUrlAttribute(
          databaseId: ScheduMate.scheduDB,
          collectionId: ScheduMate.classesCollection,
          key: 'classlink',
          xrequired: false),
      db.createBooleanAttribute(
          databaseId: ScheduMate.scheduDB,
          collectionId: ScheduMate.classesCollection,
          key: 'isonline',
          xdefault: false,
          xrequired: false),
      db.createStringAttribute(
          databaseId: ScheduMate.scheduDB,
          collectionId: ScheduMate.classesCollection,
          key: 'classname',
          size: 255,
          xrequired: false),
      db.createStringAttribute(
          databaseId: ScheduMate.scheduDB,
          collectionId: ScheduMate.classesCollection,
          key: 'days',
          size: 255,
          xrequired: false),
      db.createStringAttribute(
          databaseId: ScheduMate.scheduDB,
          collectionId: ScheduMate.classesCollection,
          key: 'starttime',
          size: 255,
          xrequired: false),
      db.createStringAttribute(
          databaseId: ScheduMate.scheduDB,
          collectionId: ScheduMate.classesCollection,
          key: 'endtime',
          size: 255,
          xrequired: false),
    ]);
  } catch (e) {
    log('ClassesError: $e');
  }
}

/// Create calender Collection
Future<void> createAssignments(Databases db) async {
  try {
    await db.createCollection(
        databaseId: ScheduMate.scheduDB,
        collectionId: ScheduMate.assignmentCollection,
        name: 'Assignments Projects');
    Future.wait([
      db.createStringAttribute(
          databaseId: ScheduMate.scheduDB,
          collectionId: ScheduMate.assignmentCollection,
          key: 'groupid',
          size: 255,
          xrequired: true),
      db.createUrlAttribute(
          databaseId: ScheduMate.scheduDB,
          collectionId: ScheduMate.assignmentCollection,
          key: 'assignmentlink',
          xrequired: true)
    ]);
  } catch (e) {
    log('AssignmentsError: $e');
  }
}

void main(final req, final res) async {
final Client = client
        .setEndpoint(req.variables['APPWRITE_FUNCTION_ENDPOINT'])
        .setProject(req.variables['APPWRITE_FUNCTION_PROJECT_ID'])
        .setKey(req.variables['APPWRITE_FUNCTION_API_KEY'])
        .setSelfSigned(status: true);

  final Databases databases = Databases(client);

  try {
    Future.wait([
      createUsers(databases),
      createGroup(databases),
      createClasses(databases),
      createAssignments(databases)
    ]);
  } catch (e) {
    log('Main Function: $e');
  }
}
